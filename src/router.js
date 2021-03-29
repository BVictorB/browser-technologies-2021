const router = require('express').Router()

const
  home = require('./routes/home'),
  createpoll = require('./routes/createpoll'),
  savepoll = require('./routes/savepoll'),
  saved = require('./routes/saved'),
  poll = require('./routes/poll'),
  result = require('./routes/result'),
  polls = require('./routes/polls'),
  voted = require('./routes/voted'),
  subscribe = require('./routes/subscribe'),
  addanswers = require('./routes/addanswers')

router
  .get('/', home)
  .get('/createpoll', createpoll)
  .post('/createpoll', createpoll)
  .post('/savepoll', savepoll)
  .get('/saved/:id', saved)
  .post('/saved/:id', saved)
  .get('/poll/:id', poll)
  .post('/poll/:id', poll)
  .get('/result/:id', result)
  .get('/polls', polls)
  .get('/voted', voted)
  .post('/subscribe', subscribe)
  .post('/addanswers', addanswers)

module.exports = router
