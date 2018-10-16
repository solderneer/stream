import SessionHandler from './SessionHandler.js'
import {SUCCESS, FAIL} from '../options.js'

export default {
  send: function (socket, msg) {
    let user = SessionHandler.getuser(socket)
    console.log(user)
    if (user === null) {
      console.log('Socket not connected')
      return FAIL
    } else if (msg === '') {
      console.log('Empty message string')
      return FAIL
    } else {
      socket.broadcast.to(user.sessionid).emit('message', {
        name: user.nickname,
        content: msg
      })
      return SUCCESS
    }
  }
}
