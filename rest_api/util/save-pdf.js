const fs = require( "mz/fs" );
const path = require( "path" );

const directory = path.resolve( __dirname, "..", "data" );

async function savePdf( name, buff ) {
  const filePath = path.resolve( directory, `${name}.pdf` );

  await fs.writeFile( filePath, buff );
}

module.exports = savePdf;

