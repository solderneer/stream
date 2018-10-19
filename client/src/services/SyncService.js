import socket from './Socket.js'

function sendtime(time) {
    socket.emit('videotime', time)
}

function gettime(callback) {
    socket.on('videotime', (time) => {
        callback(time)
    })
}

function onplay(callback) {
    socket.on('play', () => {
        callback()
    })
}

function onpause(callback) {
    socket.on('pause', () => {
        callback()
    })
}

function playall() {
    socket.emit('play')
}

function pauseall() {
    socket.emit('pause')
}

export default {
    sendtime,
    gettime,
    playall,
    pauseall,
    onplay,
    onpause,
}