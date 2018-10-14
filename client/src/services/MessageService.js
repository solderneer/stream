import socket from './Socket.js'

function send(msg) {
    socket.emit('message', msg)
}

function receive(callback) {
    socket.on('message', (msg) => {
        callback(msg)
    })
}

export default {
    send,
    receive
}