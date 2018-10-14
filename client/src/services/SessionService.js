import socket from './Socket.js'

function join_session(sessionid, nickname, callback) {
    socket.emit('join', sessionid, nickname, function (res) {
        callback(res)
    })
}

function create_session(secret, nickname, callback) {
    socket.emit('create', secret, nickname, function (res) {
        callback(res)
    })
}

export default {
    join_session,
    create_session
}