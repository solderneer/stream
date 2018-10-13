import express from 'express'
import path from 'path'

const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(port, function () {
  console.log('Listening on *:3000')
})
