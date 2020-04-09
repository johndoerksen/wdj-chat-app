const path = require( 'path' )
const http = require( 'http' )
const express = require( 'express' )
const socketIO = require( 'socket.io' )


port = process.env.PORT || 8989

const publicPath = path.join( __dirname, '/../public' )

let app = express()
let server = http.createServer( app )
let io = socketIO( server )

app.use( express.static( publicPath ) )

io.on( 'connection', ( socket ) => {
    console.log( `A new user just connected ` )

    socket.on( 'disconnect', () => {
        console.log( "User was disconnected" )
    } )
} )
server.listen( port, () => {
    console.log( `Server up and running on port ${port}` )
} )