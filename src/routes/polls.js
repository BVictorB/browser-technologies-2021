const Poll = require('../models/poll')

const polls = async (req, res) => {
  const polls = await Poll.find({}).sort({date:-1})
  res.render('pages/polls', { polls })
}

module.exports = polls
