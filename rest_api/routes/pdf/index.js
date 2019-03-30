const express = require( "express" );
const router = express.Router();
const savePdf = require( "./save-pdf" );

router.post( "/", ( req, res ) => {
  const pdfData = req.body.pdf;
  const clientName = req.body.client;

  if ( !pdfData ) {
    return res.json( { error: true, message: "Please pass the 'pdf' parameter with the pdf data as a base64 encoded string" } );
  }
  if ( !clientName || typeof clientName !== "string" ) {
    return res.json( { error: true, message: "Please pass the 'client' parameter with the name of the client" } )
  }

  savePdf( clientName, pdfData );

  res.json( { error: false } )
} );

module.exports = router;

