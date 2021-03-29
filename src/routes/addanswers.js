const addanswers = (req, res) => {
  const answers = Array.from(Array(Number(req.body.answers)).keys())
  res.render('pages/createpoll', { answers })
}

module.exports = addanswers
