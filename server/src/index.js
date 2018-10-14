import express from 'express'
import http from 'http'
import socket from 'socket.io'
import randomstring from 'randomstring'

// Just some setup stuff
const app = express()
const server = http.createServer(app)
const io = socket(server, { origins: 'http://localhost:80' })
const port = 3000

const secret = 'password'

const SUCCESS = 0
const FAIL = 1

let sessions = []

io.on('connection', function (socket) {
  console.log('Someone connected')
  socket.on('join', function (sessionid, nickname, callback) {
    let session = sessions.find((index) => { return index === sessionid })
    if (session) {
      callback(SUCCESS)
    } else {
      callback(FAIL)
    }
  })
  socket.on('create', function (usecret, nickname, callback) {
    if (usecret === secret) {
      sessions.push(randomstring.generate(7))
      console.log('Admin connected')
      console.log('New session ' + sessions[sessions.length - 1])
      callback(SUCCESS)
    } else {
      console.log('Secret wrong')
      callback(FAIL)
    }
  })
})

server.listen(port, function () {
  console.log('Listening on *:3000')
})
