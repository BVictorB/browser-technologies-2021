const addanswers = (req, res) => {
  const 
    today = new Date().toISOString().slice(0, 10),
    week = new Date(new Date().getTime() + (60*60*24*7*1000)).toISOString().slice(0, 10),
    answers = Array.from(Array(Number(req.body.answers)).keys())

  res.render('pages/createpoll', { answers, today, week })
}

module.exports = addanswers
