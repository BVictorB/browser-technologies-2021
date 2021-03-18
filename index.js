const
  express = require('express'),
  app = express(),
  router = require('./src/router')

app
  .set('view engine', 'ejs')
  .set('views', 'src/views')
  .use(express.json())
  .use(express.static('src/static'))
  .listen(3000)

app.use(router)
