const Poll = require('../models/poll')

const createpoll = (req, res) => {
  if (req.method === 'GET') {
    const cookies = req.cookies.saved
    res.render('pages/createpoll', { cookies })
  } else if (req.method === 'POST') {
    const { date, time, question, answers } = req.body
    const timestamp = new Date(`${date} ${time}`).getTime()

    const poll = new Poll()
    const formattedAnswers = answers.map(answer => {
      return {
        answer: answer,
        votes: 0
      }
    })
    
    poll.question = question
    poll.answers = formattedAnswers
    poll.closingtime = timestamp
  
    poll.save((err, poll) => {
      !err && res.redirect(`poll/${poll._id}`)
    })
  }
}

module.exports = createpoll
