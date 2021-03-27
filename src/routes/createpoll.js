const Poll = require('../models/poll')

const createpoll = (req, res) => {
  if (req.method === 'GET') {
    res.render('pages/createpoll')
  } else if (req.method === 'POST') {
    const poll = new Poll()
    const answers = req.body.answers.map(answer => {
      return {
        answer: answer,
        votes: 0
      }
    })
    
    poll.question = req.body.question
    poll.answers = answers
  
    poll.save((err, poll) => {
      !err && res.redirect(`poll/${poll._id}`)
    })
  }
}

module.exports = createpoll
