const Poll = require('../models/poll')

const poll = async (req, res) => {
  const cookies = req.cookies.votes
  const id = req.params.id

  if (req.method === 'GET') {
    const poll = await Poll.findOne({ _id: id })

    if (cookies && cookies.includes(id)) {
      res.render('pages/poll', { poll, voted: true })
      return
    }

    res.render('pages/poll', { poll })
  } else if (req.method === 'POST') {
    const vote = `answers.${req.body.answer}.votes`

    const updateCookies = cookies ? [...cookies, id] : [id]

    Poll.findOneAndUpdate(
      { _id: id },
      { $inc: { [vote] : 1 }},
      (err, poll) => {
        console.log(poll)
      }
    )

    res.cookie('votes', updateCookies)
    res.redirect(`/poll/${id}`)
  }
}

module.exports = poll
