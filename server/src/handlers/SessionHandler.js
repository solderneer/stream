import randomstring from 'randomstring'
import UserType from '../datatypes/UserType.js'
import {secret, SUCCESS, FAIL} from '../options.js'

let sessions = []
let users = {}

export default {
  join: function (io, socket, sessionid, nickname) {
    let session = sessions.find((index) => { return index === sessionid })
    if (session && !(nickname === '')) {
      socket.join(session, () => {
        users[socket.id] = new UserType(nickname, sessionid, false)
        io.to(session).emit('connect', nickname + ' joined room ' + session)
        console.log(users)
      })
      return SUCCESS
    } else {
      return FAIL
    }
  },
  create: function (io, socket, usecret, nickname) {
    if ((usecret === secret) && !(nickname === '')) {
      let sessionid = randomstring.generate(7)
      sessions.push(sessionid)
      console.log('New session ' + sessionid)
      socket.join(sessionid, () => {
        users[socket.id] = new UserType(nickname, sessionid, true)
        console.log(users)
      })
      return SUCCESS
    } else {
      console.log('Secret invalid')
      return FAIL
    }
  },
  getuser: function (socket) {
    return users[socket.id]
  },
  isuser: function (socket) {
    console.log(!(users[socket.id] === undefined))
    return !(users[socket.id] === undefined)
  },
  exit: function (io, socket) {
    // Need to check for admin status and kick out people in room accordingly
    if (!(users[socket.id] === undefined)) {
      delete users[socket.id]
      console.log(users)
    } else {
      console.log('Someone left')
    }
  }
}
