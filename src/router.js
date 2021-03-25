const router = require('express').Router()

const
  home = require('./routes/home'),
  createpoll = require('./routes/createpoll'),
  poll = require('./routes/poll'),
  polls = require('./routes/polls'),
  result = require('./routes/result'),
  subscribe = require('./routes/subscribe')

router
  .get('/', home)
  .get('/createpoll', createpoll)
  .post('/createpoll', createpoll)
  .get('/poll/:id', poll)
  .post('/poll/:id', poll)
  .get('/result/:id', result)
  .get('/polls', polls)
  .get('/subscribe', subscribe)
  .post('/subscribe', subscribe)

module.exports = router
