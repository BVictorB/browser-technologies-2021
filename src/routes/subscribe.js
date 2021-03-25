const Poll = require('../models/poll')

const subscribe = async (req, res) => {
  const { id, subscription } = req.body

  Poll.findOneAndUpdate(
    { _id: id },
    { $push: { subscriptions: subscription }},
    (err, poll) => {
      console.log(poll)
    }
  )

  // res.status(201).json({})
}

module.exports = subscribe
