const Poll = require('../models/poll')

const polls = async (req, res) => {
  const pollsData = await Poll.find({}).sort({date:-1})
    const polls = await pollsData.map(pollData => {
      const totalVotes = pollData.answers.reduce((prev, answer) => prev + answer.votes, 0)
      return {
        ...pollData._doc,
        totalVotes
      }
    })
  res.render('pages/polls', { polls })
}

module.exports = polls
