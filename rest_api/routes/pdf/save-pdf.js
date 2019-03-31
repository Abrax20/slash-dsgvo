const fs = require( "mz/fs" );
const path = require( "path" );

const directory = path.resolve( __dirname, "..", "..", "data", "pdf" );

function savePdf( name, buffer ) {
  const filePath = path.resolve( directory, `${name}.pdf` );

  fs.writeFile( filePath, buffer, { encoding: "base64" } )
}

module.exports = savePdf;

