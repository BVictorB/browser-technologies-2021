require('dotenv').config();

const
  express = require('express'),
  mongoose = require('mongoose'),
  session = require('express-session'),
  socket = require('socket.io'),
  webPush = require('web-push'),
  cookieParser = require('cookie-parser'),
  app = express(),
  server = require('http').createServer(app),
  router = require('./src/router'),
  checkNotification = require('./src/utils/checkNotification')

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

io.on('connection', socket => {
  socket.on('poll', data => poll(data, socket))
})

// webPush.setVapidDetails('mailto:replacethislater@test.com', process.env.PUBLIC_VAPID, process.env.PRIVATE_VAPID)

// let subscriptions = []

// setInterval(_ => {
//   subscriptions.forEach(subscription => {
//     checkNotification(subscription)
//   })
// }, 10000)

app.use(router)
