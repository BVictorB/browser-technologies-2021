const Poll = require('../models/poll')

const voted = async (req, res) => {
  const cookies = req.cookies.votes

  if (cookies) {
    const pollsData = await Poll.find({ _id: { $in: cookies } }).sort({date:-1})
    const polls = await pollsData.map(pollData => {
      const totalVotes = pollData.answers.reduce((prev, answer) => prev + answer.votes, 0)
      return {
        ...pollData._doc,
        totalVotes
      }
    })
    res.render('pages/voted', { polls })
  } else {
    res.render('pages/voted')
  }
}

module.exports = voted
