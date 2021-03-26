const webPush = require('web-push')

const checkNotification = async (sub, question, winner) => {
  const { answer, votes, percentage } = winner

  const payload = JSON.stringify({
    title: `${question} results are in!`,
    content: `${answer} won with ${votes} votes (${percentage}%)`
    // icon: profile.logo
  })

  webPush.sendNotification(sub, payload).catch(err => console.log(err))
}

module.exports = checkNotification
