import socket from './Socket.js'

function join_client(sessionid, nickname, callback) {
    socket.emit('join', sessionid, nickname, function (res) {
        callback(res)
    })
}

export default {
    join_client
}