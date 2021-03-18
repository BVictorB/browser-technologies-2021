const router = require('express').Router()

const
  home = require('./routes/home'),
  login = require('./routes/login'),
  register = require('./routes/register')

router
  .get('/', home)
  .get('/login', login)
  .get('/register', register)

module.exports = router
