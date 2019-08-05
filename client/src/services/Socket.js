import io from 'socket.io-client'

const baseURL = 'https://streamserver.solderneer.me'
const socket = io(baseURL)

export default socket
