import socket from './Socket.js'

function send(msg) {
    socket.emit('message', msg)
}

export default {
    send,
}