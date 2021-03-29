const 
  ObjectId = require('mongoose').Types.ObjectId,
  SavedPoll = require('../models/savedpoll')

const saved = async (req, res) => {
  const id = req.params.id

  if (!ObjectId.isValid(id)) {
    res.redirect('/createpoll')
    return
  }

  if (req.method === 'GET') {
    const data = await SavedPoll.findOne({ _id: id })
    const cookies = req.cookies.saved
    res.render('pages/createpoll', { data, cookies })
  } else if (req.method === 'POST') {
    const cookies = req.cookies.saved
    const updateCookies = cookies.filter(cookie => cookie.id !== id)

    SavedPoll.deleteOne({ _id: id }, err => {
      err && console.log(err)
    })
    res.cookie('saved', updateCookies)
    res.redirect('/createpoll')
  }
}

module.exports = saved
