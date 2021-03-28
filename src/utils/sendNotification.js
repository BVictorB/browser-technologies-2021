const webPush = require('web-push')

const checkNotification = async (sub, poll, winner) => {
  const { answer, votes, percentage } = winner
  const { _id, question } = poll

  const payload = JSON.stringify({
    title: `${question} results are in!`,
    content: `${answer} won with ${votes} ${votes > 1 ? 'votes' : 'vote'} (${percentage}%)`,
    url: `http://localhost:4000/result/${_id}`
    // icon: profile.logo
  })

  webPush.sendNotification(sub, payload).catch(err => console.log(err))
}

module.exports = checkNotification
