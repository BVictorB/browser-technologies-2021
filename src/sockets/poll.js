const Poll = require('../models/poll')

const poll = async (data, socket) => {
  const poll = await Poll.watch({ _id: data.id })

  poll.on('change', async () => {
    const pollData = await Poll.findOne({ _id: data.id })
    socket.emit('poll', pollData)
  })
}

module.exports = poll
