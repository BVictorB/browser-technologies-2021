const 
    Poll = require('../models/poll'),
    sendNotification = require('./sendNotification'),
    roundNum = require('./roundNum')

const checkPolls = async () => {
    const openPolls = await Poll.find({ closed: false })
    openPolls.forEach(openPoll => {
        if (new Date() >= openPoll.closingtime) {
            console.log(`Close poll ${openPoll.question}`)
            const totalVotes = openPoll.answers.reduce((prev, answer) => prev + answer.votes, 0)
            const results = openPoll.answers.map(answer => ({
                ...answer,
                percentage: roundNum(answer.votes/totalVotes * 100, 1),
            }))
            const winner = results.reduce((prev, result) => prev.votes > result.votes ? prev : result)

            openPoll.subscriptions.forEach(subscription => {
                sendNotification(subscription, poll, winner)
            })
        } else {
            console.log(`Dont close poll ${openPoll.question}`)
        }
    })
}

module.exports = checkPolls
