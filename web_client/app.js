const express = require( "express" );
const helmet = require( "helmet" );
const httpLogger = require( "./logs/http-logger" );
const secrets = require( "./util/secrets" );
const initiateRoutes = require( "./routes" );

const app = express();

// Security
app.use( helmet( { referrerPolicy: true } ) );

// Render view template
app.set( "view engine", "pug" );
app.set( "views", `${__dirname}/views` );

// Dev logging
if ( secrets.ENVIRONMENT === "development" ) {
  app.use( httpLogger.dev );
}

// Use routes
initiateRoutes( app );

app.listen( secrets.PORT, () => {
  console.log( `Server running on port ${secrets.PORT}` );
} );

