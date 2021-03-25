const Poll = require('../models/poll')

const result = async (req, res) => {
  const 
    id = req.params.id,
    poll = await Poll.findOne({ _id: id }),
    publicVapidKey = process.env.PUBLIC_VAPID

  res.render('pages/result', { poll, publicVapidKey })
}

module.exports = result
