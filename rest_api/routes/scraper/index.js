const express = require( "express" );
const router = express.Router();
const scrape = require( "./scrape-website" );
const zip = require( "./zip" );
const fs = require( "mz/fs" );

router.get( "/", async ( req, res ) => {
  const url = req.query.url;

  try { // Test if valid url
    new URL( url );
  } catch( err ) {
    return res.json( { error: true, message: "Please pass a valid 'url' query parameter." } )
  }

  const dataDirectory = await scrape( url )
  const zipBuffer = await zip( dataDirectory );

  //const zipPath = `${dataDirectory}.zip`
  //await fs.writeFile( zipPath, zipBuffer, { encoding: "base64" } );

  res.json( { error: false, encoding: "base64", zip: zipBuffer } )
} );

module.exports = router;

