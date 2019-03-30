const Zip = require( "jszip" );
const path = require( "path" );
const walk = require( "walk" ).walk;
const fs = require( "mz/fs" );

/*
 * Create a zip file from a directory
 */
async function zipDir( dataDirectory ) {
  const zip = new Zip();
  const zipDirectories = {}

  walker = walk( dataDirectory )
  walker.on( "directories", ( root, statsArr, next ) => {
    statsArr.forEach( stat => {
      const dirName = stat.name;
      zipDirectories[dirName] = zip.folder( dirName );
    } )
    next();
  } );

  walker.on( "file", async ( directoryRoot, stats, next ) => {
    const fileName = stats.name;
    const filePath = path.resolve( directoryRoot, fileName );
    const fileBuffer = await fs.readFile( filePath, { encoding: "base64" } );

    const directoryRootArray = directoryRoot.split( "/" );
    const directory = directoryRootArray[directoryRootArray.length - 1];

    if ( dataDirectory !== directoryRoot ) { // Add file to the correstponding directory within the zip file
      zipDirectories[ directory ].file( fileName, fileBuffer, { base64: true } );
    }
    else { // File in zip root
      zip.file( fileName, fileBuffer, { base64: true } );
    }
    next();
  } )


  const zipBuffer = await new Promise( resolve => {
    walker.on( "end", async () => {
      const zipBuffer = await zip.generateAsync( { type: "base64" } );

      resolve( zipBuffer );
    } )
  } )
  return zipBuffer;
}

module.exports = zipDir;

