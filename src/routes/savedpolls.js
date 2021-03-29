const savedpolls = (req, res) => {
  const cookies = req.cookies.saved
  res.render('pages/savedpolls', { cookies })
}

module.exports = savedpolls
