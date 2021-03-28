const router = require('express').Router()

const
  home = require('./routes/home'),
  createpoll = require('./routes/createpoll'),
  poll = require('./routes/poll'),
  result = require('./routes/result'),
  polls = require('./routes/polls'),
  voted = require('./routes/voted'),
  subscribe = require('./routes/subscribe')

router
  .get('/', home)
  .get('/createpoll', createpoll)
  .post('/createpoll', createpoll)
  .get('/poll/:id', poll)
  .post('/poll/:id', poll)
  .get('/result/:id', result)
  .get('/polls', polls)
  .get('/voted', voted)
  .post('/subscribe', subscribe)

module.exports = router
