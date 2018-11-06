import randomstring from 'randomstring'
import UserType from '../datatypes/UserType.js'
import SessionType from '../datatypes/SessionType.js'
import {secret, SUCCESS, FAIL} from '../options.js'

let sessions = []
let users = {}

export default {
  join: function (io, socket, sessionid, nickname) {
    let session = sessions.find((elem) => { return elem.sessionid === sessionid })
    if (session && !(nickname === '')) {
      socket.join(session.sessionid, () => {
        users[socket.id] = new UserType(nickname, session.sessionid, false)
        io.to(session.sessionid).emit('connect', nickname + ' joined room ')
        console.log(users)
        console.log(sessions)
      })
      return SUCCESS
    } else {
      return FAIL
    }
  },
  create: function (io, socket, usecret, nickname) {
    if ((usecret === secret) && !(nickname === '')) {
      let sessionid = randomstring.generate(7)
      let session = new SessionType(sessionid, '')
      sessions.push(session)
      console.log('New session ' + sessionid)
      socket.join(sessionid, () => {
        users[socket.id] = new UserType(nickname, sessionid, true)
        console.log(users)
        console.log(sessions)
      })
      return SUCCESS
    } else {
      console.log('Secret invalid')
      return FAIL
    }
  },
  setmovie: function (socket, movie) {
    let sessionid = users[socket.id].sessionid
    let index = sessions.findIndex((elem) => { return elem.sessionid === sessionid })
    sessions[index].movie = movie
    return SUCCESS
  },
  getmovie: function (socket) {
    let sessionid = users[socket.id].sessionid
    let index = sessions.findIndex((elem) => { return elem.sessionid === sessionid })
    return sessions[index].movie
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
