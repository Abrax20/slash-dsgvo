const express = require( "express" );
const helmet = require( "helmet" );
const bodyParser = require( "body-parser" );
const httpLogger = require( "./logs/http-logger" );
const secrets = require( "./util/secrets" );
const initiateRoutes = require( "./routes" );

const app = express();

// Security
app.use( helmet( { referrerPolicy: true } ) );

// Parse req.body
app.use( bodyParser.json( { limit: "7mb" }) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// Dev logging
if ( secrets.ENVIRONMENT === "development" ) {
  app.use( httpLogger.dev );
}

// Use routes
initiateRoutes( app );

app.listen( secrets.PORT, () => {
  console.log( `Server running on port ${secrets.PORT}` );
} );

