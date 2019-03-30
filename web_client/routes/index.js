const viewRoutes = require( "./views" );

function initiateRoutes( app ) {
  app.use( "/", viewRoutes );

  // else Not Found
  app.use( ( req, res ) => {
    res.sendStatus( 404 )
  } );
}

module.exports = initiateRoutes;

