const pdfRoutes = require( "./pdf" );
const scraperRoutes = require( "./scraper" );

function initiateRoutes( app ) {
  app.use( "/pdf", pdfRoutes );
  app.use( "/scrape", scraperRoutes );

  // else Not Found
  app.use( ( req, res ) => {
    res.sendStatus( 404 )
  } );
}

module.exports = initiateRoutes;

