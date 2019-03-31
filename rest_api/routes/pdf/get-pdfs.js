const walk = require( "walk" ).walk;
const path = require( "path" );
const fs = require( "mz/fs" );

const directory = path.resolve( __dirname, "..", "..", "data", "pdf" );

async function getPdfList() {
  const pdfList = [];

  const walker = walk( directory );
  walker.on( "file", ( directoryRoot, stats, next ) => {
    const fileName = stats.name;
    const filePath = path.resolve( directoryRoot, fileName );

    pdfList.push( {
      name: fileName.split( ".pdf" )[0],
      link: `pdf/download/${encodeURIComponent( fileName )}`
    } );

    next();
  } )

  const pdfListResult = await new Promise( resolve => {
    walker.on( "end", () => {
      resolve( pdfList );
    } );
  } )
  return pdfListResult;
}

async function getFilePath( fileName ) {
  const filePath = path.resolve( directory, fileName );

  if ( await fs.exists( filePath ) ) {
    return filePath;
  } else {
    return null;
  }
}

module.exports = {
  list: getPdfList,
  file: getFilePath,
}

