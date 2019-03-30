const express = require( "express" );
const router = express.Router();
const savePdf = require( "./save-pdf" );
const getPdf = require( "./get-pdfs" );

/*
 * Submit a pdf
 */
router.post( "/", ( req, res ) => {
  const pdfData = req.body.pdf;
  const clientName = decodeURIComponent( req.body.client )

  if ( !pdfData ) {
    return res.json( { error: true, message: "Please pass the 'pdf' parameter with the pdf data as a base64 encoded string" } );
  }
  if ( !clientName || typeof clientName !== "string" ) {
    return res.json( { error: true, message: "Please pass the 'client' parameter with the name of the client" } )
  }

  savePdf( clientName, pdfData );

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

