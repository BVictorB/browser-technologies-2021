const router = require('express').Router()

const
  home = require('./routes/home'),
  createpoll = require('./routes/createpoll'),
  poll = require('./routes/poll'),
  result = require('./routes/result'),
  subscribe = require('./routes/subscribe'),
  admin = require('./routes/admin')

router
  .get('/', home)
  .get('/createpoll', createpoll)
  .post('/createpoll', createpoll)
  .get('/poll/:id', poll)
  .post('/poll/:id', poll)
  .get('/result/:id', result)
  .get('/subscribe', subscribe)
  .post('/subscribe', subscribe)
  .get('/admin', admin)
  .post('/admin', admin)

module.exports = router
