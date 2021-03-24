const Poll = require('../models/poll')

const polls = async (req, res) => {
  const polls = await Poll.find({})
  res.render('pages/polls', { polls })
}

module.exports = polls
