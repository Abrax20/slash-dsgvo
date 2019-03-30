const dotenv = require( "dotenv" );
const fs = require( "fs" );

if ( fs.existsSync( ".env" ) ) {
  console.log( "Using .env file to supply config environment variables" );
  dotenv.config( { path: ".env" } );
} else {
  console.log( "Using .env.example file to supply config environment variables" );
  dotenv.config( { path: ".env.example" } ); // Fallback if no own .env file exists
}

module.exports = {
  ENVIRONMENT   : process.env.NODE_ENV || "development",
  PORT          : process.env.PORT || 8000,
};

