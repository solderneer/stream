import express from 'express'
import http from 'http'
import socket from 'socket.io'

// Just some setup stuff
const app = express()
const server = http.createServer(app)
const io = socket(server, { origins: 'http://localhost:80' })
const port = 3000

const secret = 'password'

let sessions = ['123', '1234']

io.on('connection', function (socket) {
  console.log('Someone connected')
  socket.on('join', function (sessionid, nickname, callback) {
    let session = sessions.find((index) => { return index === sessionid })
    if (session) {
      callback(sessionid)
    } else {
      callback()
    }
  })
  socket.on('create', function (secret, nickname) {
    console.log('message: ' + secret + ' ' + nickname)
  })
})

server.listen(port, function () {
  console.log('Listening on *:3000')
})
