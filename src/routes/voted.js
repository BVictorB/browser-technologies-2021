const Poll = require('../models/poll')

const voted = async (req, res) => {
  const cookies = req.cookies.votes

  if (cookies) {
    const polls = await Poll.find({ _id: { $in: cookies } }).sort({date:-1})
    res.render('pages/voted', { polls })
  } else {
    res.render('pages/voted')
  }
}

module.exports = voted
