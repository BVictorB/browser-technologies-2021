require('dotenv').config();

const
  express = require('express'),
  mongoose = require('mongoose'),
  socket = require('socket.io'),
  cookieParser = require('cookie-parser'),
  app = express(),
  server = require('http').createServer(app),
  router = require('./src/router')

mongoose.connect(process.env.DB_URL, {
  useUnifiedTopology: true,
	useNewUrlParser: true
})

const db = mongoose.connection

db.once('open', _ => {
  console.log('Connected to MongoDB!')
})

app
  .set('view engine', 'ejs')
  .set('views', 'src/views')
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(express.static('src/static'))

server.listen(4000)

const io = socket(server)
const poll = require('./src/sockets/poll')

io.on('connection', (socket) => {
  socket.on('poll', data => poll(data, socket))
})

app.use(router)
