const Poll = require('../models/poll')
const sendNotification = require('../utils/sendNotification')
const roundNum = require('../utils/roundNum')

const admin = async (req, res) => {
  if (req.method === 'GET') {
    const polls = await Poll.find({})
    res.render('pages/admin', { polls })
  } else if (req.method === 'POST') {
    const poll = await Poll.findOne({ _id: req.body.id })
    const question = poll.question

    const totalVotes = poll.answers.reduce((prev, answer) => prev + answer.votes, 0)
    const results = poll.answers.map(answer => ({
      ...answer,
      percentage: roundNum(answer.votes/totalVotes * 100, 1),
    }))
    const winner = results.reduce((prev, result) => prev.votes > result.votes ? prev : result)

    poll.subscriptions.forEach(subscription => {
      sendNotification(subscription, question, winner)
    })
  }
}

module.exports = admin
