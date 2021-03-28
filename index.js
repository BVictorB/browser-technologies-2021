require('dotenv').config();

const
  express = require('express'),
  mongoose = require('mongoose'),
  socket = require('socket.io'),
  webPush = require('web-push'),
  cookieParser = require('cookie-parser'),
  app = express(),
  server = require('http').createServer(app),
  io = socket(server),
  db = mongoose.connection,
  router = require('./src/router'),
  poll = require('./src/sockets/poll'),
  checkPolls = require('./src/utils/checkPolls')

mongoose.connect(process.env.DB_URL, {
  useUnifiedTopology: true,
	useNewUrlParser: true
})

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

io.on('connection', socket => {
  socket.on('poll', data => poll(data, socket))
})

setTimeout(checkPolls, 60000)

webPush.setVapidDetails('mailto:replacethislater@test.com', process.env.PUBLIC_VAPID, process.env.PRIVATE_VAPID)

app.use(router)
