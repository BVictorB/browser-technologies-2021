const 
  Poll = require('../models/poll'),
  roundNum = require('../utils/roundNum')

const result = async (req, res) => {
  const
    id = req.params.id,
    { answers, _id, question, closingtime } = await Poll.findOne({ _id: id }),
    publicVapidKey = process.env.PUBLIC_VAPID

  const totalVotes = answers.reduce((prev, answer) => prev + answer.votes, 0)
  const results = answers.map(answer => ({
    ...answer,
    percentage: roundNum(answer.votes/totalVotes * 100, 1),
  }))

  const data = {
    _id,
    question,
    answers: results,
    totalVotes,
    closingtime
  }

  res.render('pages/result', { data, publicVapidKey })
}

module.exports = result
