const express = require( "express" );
const router = express.Router();
const axios = require( "axios" );
const { REST_API_URL } = require( "../util/secrets" );

router.get( "/", async ( req, res ) => {

  const url = `${REST_API_URL}/pdf/list`;
  let pdfList = await axios.get( url )
    .then( response => response.data.pdfList )
    .catch( err => {
      console.log( err );
      return [];
    } )

  pdfList.map( pdf => { // Direct download link to rest api
    pdf.link = `${REST_API_URL}/${pdf.link}`
    return pdf;
  } )

  res.render( "main", { pdfList }  )
} );

module.exports = router;

