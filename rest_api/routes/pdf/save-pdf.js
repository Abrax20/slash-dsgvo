const fs = require( "mz/fs" );
const path = require( "path" );


function savePdf( name, buffer ) {

  fs.writeFile( filePath, buffer, { encoding: "base64" } )
}

module.exports = savePdf;

