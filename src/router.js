const router = require('express').Router()

const
  home = require('./routes/home'),
  createpoll = require('./routes/createpoll'),
  poll = require('./routes/poll'),
  result = require('./routes/result')

router
  .get('/', home)
  .get('/createpoll', createpoll)
  .post('/createpoll', createpoll)
  .get('/poll/:id', poll)
  .post('/poll/:id', poll)
  .get('/result/:id', result)

module.exports = router
