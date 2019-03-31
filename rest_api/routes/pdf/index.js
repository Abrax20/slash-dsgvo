const express = require( "express" );
const router = express.Router();
const savePdf = require( "./save-pdf" );
const getPdf = require( "./get-pdfs" );
const generatePdf = require( "./generate-pdf" );

/*
 * Submit a pdf
 */
router.post( "/", async ( req, res ) => {
  const company = req.body.company || {};
  if ( !company.name ) {
    return res.json( { error: true, message: "Missing company.name" } );
  }

  const client = req.body.client || {};
  if ( !client.name ) {
    return res.json( { error: true, message: "Missing client.name" } );
  }
  if ( !client.signature ) {
    return res.json( { error: true, message: "Missing client.signature" } );
  }
  if ( !client.lang ) {
    return res.json( { error: true, message: "Missing client.lang" } );
  }

  const convention = req.body.convention || {};
  if ( !convention.name ) {
    return res.json( { error: true, message: "Missing convention.name" } );
  }
  if ( !convention.place ) {
    return res.json( { error: true, message: "Missing convention.place" } );
  }
  if ( !convention.time ) {
    return res.json( { error: true, message: "Missing convention.time" } );
  }

  const dpo = req.body.dpo || {};
  if ( !dpo.name ) {
    return res.json( { error: true, message: "Missing dpo.name" } );
  }
  if ( !dpo.email ) {
    return res.json( { error: true, message: "Missing dpo.email" } );
  }
  if ( !dpo.tel ) {
    return res.json( { error: true, message: "Missing dpo.tel" } );
  }
  if ( !dpo.addr ) {
    return res.json( { error: true, message: "Missing dpo.addr" } );
  }

  //savePdf( client.name, pdfData );

  await generatePdf( { company, client, convention, dpo } );

  res.json( { error: false } )
} );

/*
 * @returns: a list of all available pdfs
 */
router.get( "/list", async ( req, res ) => {
  const pdfList = await getPdf.list();

  res.json( { error: false, pdfList } )
} );

/*
 * @returns: the pdf file for the given filename
 */
router.get( "/download/:name", async ( req, res ) => {
  const fileName = req.params.name;
  const filePath = await getPdf.file( fileName );

  if ( !filePath ) {
    return res.json( { error: true, message: "The given filename does not exist" } )
  }

  res.sendFile( filePath );
} );

module.exports = router;

