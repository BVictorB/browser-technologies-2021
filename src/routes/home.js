const Poll = require('../models/poll')

const home = async (req, res) => {
  const 
    cookies = req.cookies.votes,
    recent = await Poll.find({}).sort({date:-1}).limit(4)

  if (cookies) {
    const votedPolls = await Poll.find({ _id: { $in: cookies } }).sort({date:-1}).limit(4)
    const voted = await votedPolls.map(votedPoll => {
      const totalVotes = votedPoll.answers.reduce((prev, answer) => prev + answer.votes, 0)
      return {
        ...votedPoll._doc,
        totalVotes
      }
    })
    res.render('pages/index', { voted, recent })
  } else {
    res.render('pages/index', { recent })
  }
}

module.exports = home
