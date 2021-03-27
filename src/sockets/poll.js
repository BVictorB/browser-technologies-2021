const 
  Poll = require('../models/poll'),
  roundNum = require('../utils/roundNum')

const poll = async (data, socket) => {
  const poll = await Poll.watch({ _id: data.id })

  poll.on('change', async () => {
    const { answers, _id, question } = await Poll.findOne({ _id: data.id })
    const totalVotes = answers.reduce((prev, answer) => prev + answer.votes, 0)
    const results = answers.map(answer => ({
      ...answer,
      percentage: roundNum(answer.votes/totalVotes * 100, 1),
    }))

    const pollData = {
      _id,
      question,
      answers: results,
      totalVotes
    }
    socket.emit('poll', pollData)
  })
}

module.exports = poll
