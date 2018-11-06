import socket from './Socket.js'

function join_session(sessionid, nickname, callback) {
    // Input validation
    if (sessionid === '') {
        callback(1, 'Enter a session ID!')
    } else if (nickname === '') {
        callback(1, 'Enter a nickname!')
    } else {
        socket.emit('join', sessionid, nickname, function (res, err) {
            callback(res, err)
        })
    }
}

function create_session(secret, nickname, callback) {
    // Input validation
    if (secret === '') {
        callback(1, 'Enter a secret!')
    } else if (nickname === '') {
        callback(1, 'Enter a nickname!')
    } else {
        socket.emit('create', secret, nickname, function (res, err) {
            callback(res, err)
        })
    }
}

function setmovie(movie) {
    socket.emit('setmovie', movie)
}

function getmovie(callback) {
    socket.emit('getmovie', (res) => {
        callback(res)
    })
}

function isuser(callback) {
    socket.emit('isuser', (res) => {
        callback(res)
    })
}

function leave_session() {
    socket.emit('exit')
}

export default {
    join_session,
    create_session,
    isuser,
    leave_session,
    setmovie,
    getmovie,
}