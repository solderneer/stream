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
  socket.on('isuser', function (callback) {
    let res = SessionHandler.isuser(socket)
    callback(res)
  })
  socket.on('message', function (msg) {
    MessageHandler.send(socket, msg)
  })
  socket.on('exit', function () {
    SessionHandler.exit(io, socket)
  })
  socket.on('disconnect', function () {
    console.log('Someone disconnected')
    SessionHandler.exit(io, socket)
  })
})

server.listen(port, function () {
  console.log('Listening on *:3000')
})
