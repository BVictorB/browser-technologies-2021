const Poll = require('../models/poll')

const home = async (req, res) => {
    const cookies = req.cookies.votes
    const recent = await Poll.find({}).sort({date:-1}).limit(3)

    if (cookies) {
        const voted = await Poll.find({ _id: { $in: cookies } }).sort({date:-1})
        res.render('pages/index', { voted, recent })
    } else {
        res.render('pages/index', { recent })
    }
}

module.exports = home
