const Poll = require('../models/poll')

const admin = async (req, res) => {
  if (req.method === 'GET') {
    const polls = await Poll.find({}).sort({date:-1})
    res.render('pages/admin', { polls })
  } else if (req.method === 'POST') {
    // const poll = await Poll.findOne({ _id: req.body.id })
    console.log(req.body)
  }
}

module.exports = admin
