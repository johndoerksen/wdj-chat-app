const path = require( 'path' )
const express = require( 'express' )

port = process.env.PORT || 8989

const publicPath = path.join( __dirname, '/../public' )

var app = express()

app.use( express.static( publicPath ) )

app.listen( port, () => {
    console.log( `Server up and running on port ${port}` )
} )