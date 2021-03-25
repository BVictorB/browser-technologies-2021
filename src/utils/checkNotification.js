const webPush = require('web-push')

const checkNotification = async sub => {
  const payload = JSON.stringify({
    title: sub.text,
    content: sub.text
    // icon: profile.logo
  })

  webPush.sendNotification(sub.subscription, payload).catch(err => console.log(err))
}

module.exports = checkNotification
