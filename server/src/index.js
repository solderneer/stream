import express from 'express'
import http from 'http'
import socket from 'socket.io'
import {port} from './options.js'

import SessionHandler from './handlers/SessionHandler.js'
import MessageHandler from './handlers/MessageHandler.js'

// Just some setup stuff
const app = express()
const server = http.createServer(app)
const io = socket(server, { origins: 'http://localhost:80' })

io.on('connection', function (socket) {
  console.log('Someone connected')
  socket.on('join', function (sessionid, nickname, callback) {
    let res = SessionHandler.join(io, socket, sessionid, nickname)
    callback(res)
  })
  socket.on('create', function (usecret, nickname, callback) {
    let res = SessionHandler.create(io, socket, usecret, nickname)
    callback(res)
  })
  socket.on('message', function (msg) {
    MessageHandler.send(socket, msg)
  })
  socket.on('disconnect', function () {
    // Need to check for user existing befor this
    console.log('Someone disconnected')
  })
})

server.listen(port, function () {
  console.log('Listening on *:3000')
})
