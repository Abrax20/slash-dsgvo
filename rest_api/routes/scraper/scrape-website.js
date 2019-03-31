const websiteScraper = require( "website-scraper" );
const path = require( "path" );
const fs = require( "mz/fs" );
const promisify = require( "pify" );
const rimraf = require( "rimraf" );
const rmrf = promisify( rimraf );

const baseDirectory = path.resolve( __dirname, "..", "..", "data", "scraper" );

/*
 * Scrape given site and all its assets
 * @returns: path to data directory
 */
async function scrape( url ) {
  const hostname = new URL( url ).hostname;
  const dataDirectory = path.resolve( baseDirectory, hostname );
  await cleanDataDirectory( dataDirectory );

  const options = {
    urls: [ url ],
    directory: dataDirectory
  }
  await websiteScraper( options )

  return dataDirectory;
}

/*
 * Remove data directory if it exists
 */
async function cleanDataDirectory( dir ) {
  const exits = await fs.exists( dir );

  if ( exits ) {
    await rmrf( dir )
  }
}

module.exports = scrape;

