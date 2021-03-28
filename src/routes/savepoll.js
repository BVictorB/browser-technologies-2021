const SavedPoll = require('../models/savedpoll')

const savepoll = (req, res) => {
  const 
    cookies = req.cookies.saved,
    { question, answers, time, date } = req.body,
    savedPoll = new SavedPoll()
  
  savedPoll.question = question
  savedPoll.answers = answers
  savedPoll.time = time
  savedPoll.date = date

  savedPoll.save((err, savedPoll) => {
    if (!err) {
      const cookie = {
        id: savedPoll.id,
        question: savedPoll.question
      }
      const updateCookies = cookies ? [...cookies, cookie] : [cookie]
      res.cookie('saved', updateCookies)
      res.redirect(`saved/${savedPoll._id}`)
    }
  })
}

module.exports = savepoll
