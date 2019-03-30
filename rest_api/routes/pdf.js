const express = require( "express" );
const router = express.Router();
const savePdf = require( "../util/save-pdf" );

router.post( "/", ( req, res ) => {
  savePdf( "pdf-test", req.body.pdf );

  res.json( { error: false } )
} );

module.exports = router;

