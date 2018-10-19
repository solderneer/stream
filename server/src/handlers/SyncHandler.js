import SessionHandler from './SessionHandler.js'
import { SUCCESS, FAIL } from '../options.js'

export default {
  play: function (socket) {
    let user = SessionHandler.getuser(socket)
    if (user === undefined) {
      console.log('Socket not connected')
      return FAIL
    } else if (user.isadmin === false) {
      console.log('Socket is not admin')
      return FAIL
    } else {
      socket.broadcast.to(user.sessionid).emit('play')
      console.log('play')
      return SUCCESS
    }
  },
  pause: function (socket) {
    let user = SessionHandler.getuser(socket)
    if (user === undefined) {
      console.log('Socket not connected')
      return FAIL
    } else if (user.isadmin === false) {
      console.log('Socket is not admin')
      return FAIL
    } else {
      socket.broadcast.to(user.sessionid).emit('pause')
      console.log('pause')
      return SUCCESS
    }
  },
  sendtime: function (socket, time) {
    let user = SessionHandler.getuser(socket)
    if (user === undefined) {
      console.log('Socket not connected')
      return FAIL
    } else if (user.isadmine === false) {
      console.log('Socket is not admin')
      return FAIL
    } else {
      socket.broadcast.to(user.sessionid).emit('videotime', time)
      console.log(time)
      return SUCCESS
    }
  }
}
