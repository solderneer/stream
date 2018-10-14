import io from 'socket.io-client'

const baseURL = 'http://localhost:3000'
const socket = io(baseURL)

export default socket