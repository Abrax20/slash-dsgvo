const pdfRoutes = require( "./pdf" );

function initiateRoutes( app ) {
  app.use( "/pdf", pdfRoutes );

  // else Not Found
  app.use( ( req, res ) => {
    res.sendStatus( 404 )
  } );
}

module.exports = initiateRoutes;

