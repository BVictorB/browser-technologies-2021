const 
  Poll = require('../models/poll'),
  SavedPoll = require('../models/savedpoll')

const createpoll = (req, res) => {
  if (req.method === 'GET') {
    const 
      today = new Date().toISOString().slice(0, 10),
      week = new Date(new Date().getTime() + (60*60*24*7*1000)).toISOString().slice(0, 10)

    res.render('pages/createpoll', { today, week })
  } else if (req.method === 'POST') {
    const { date, time, question, answers, savedID } = req.body
    const timestamp = new Date(`${date} ${time}`).getTime()

    if (savedID) {
      const cookies = req.cookies.saved
      const updateCookies = cookies.filter(cookie => cookie.id !== savedID)
  
      SavedPoll.deleteOne({ _id: savedID }, err => {
        err && console.log(err)
      })
      res.cookie('saved', updateCookies)
    }

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
