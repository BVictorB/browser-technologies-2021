const Poll = require('../models/poll')

const home = async (req, res) => {
    const cookies = req.cookies.votes

    if (cookies) {
        const voted = await Poll.find({ _id: { $in: cookies } })
        res.render('pages/index', { voted })
    } else {
        res.render('pages/index')
    }
}

module.exports = home
