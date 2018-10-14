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
let users = {}

class UserType {
  constructor(nickname, sessionid, isadmin) {
    this.nickname = nickname
    this.sessionid = sessionid
    this.isadmin = isadmin
  }
}

io.on('connection', function (socket) {
  console.log('Someone connected')
  socket.on('join', function (sessionid, nickname, callback) {
    // Input validation
    let session = sessions.find((index) => { return index === sessionid })
    if (session && !(nickname === '')) {
      socket.join(session, () => {
        users[socket.id] = new UserType(nickname, sessionid, false)
        io.to(session).emit('connect', nickname + ' joined room ' + session)
        console.log(users)
      })
      callback(SUCCESS)
    } else {
      callback(FAIL, 'Session doesn\'t exist')
    }
  })
  socket.on('create', function (usecret, nickname, callback) {
    // Needs input validation
    if ((usecret === secret) && !(nickname === '')) {
      let sessionid = randomstring.generate(7)
      sessions.push(sessionid)
      users[socket.id] = new UserType(nickname, sessionid, true)
      console.log('New session ' + sessionid)
      callback(SUCCESS)
    } else {
      console.log('Secret wrong')
      callback(FAIL)
    }
  })
  socket.on('message', function (msg) {
    console.log(msg)
  })
  socket.on('disconnect', function () {
    // Need to check for user existing befor this
    /* console.log(users[socket.id].nickname + ' disconnected')
    if (users[socket.id].isadmin === true) {
      // emit event to disconnect all people from room and delete room
    } else {
      // inform all people in the room that this person has disconnected
    } */
  })
})

server.listen(port, function () {
  console.log('Listening on *:3000')
})
