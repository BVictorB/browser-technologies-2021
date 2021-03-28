const ObjectId = require('mongoose').Types.ObjectId
const Poll = require('../models/poll')

const poll = async (req, res) => {
  const 
    cookies = req.cookies.votes,
    id = req.params.id

  if (!ObjectId.isValid(id)) {
    res.render('pages/poll')
    return
  }

  if (req.method === 'GET') {
    const poll = await Poll.findOne({ _id: id })

    if (cookies && cookies.includes(id) || poll.closed) {
      res.redirect(`/result/${id}`)
      return
    }

    res.render('pages/poll', { poll })
  } else if (req.method === 'POST') {
    const 
      vote = `answers.${req.body.answer}.votes`,
      updateCookies = cookies ? [...cookies, id] : [id]

    Poll.findOneAndUpdate(
      { _id: id },
      { $inc: { [vote] : 1 }},
      err => {
        res.cookie('votes', updateCookies)
        res.redirect(`/result/${id}`)
      }
    )
  }
}

module.exports = poll
