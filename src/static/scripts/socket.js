document.querySelector('#refreshButton').remove()
document.querySelector('#liveData').style.display = 'inline-block'

const socket = io.connect('http://localhost:4000')
const id = window.location.pathname.split('/').pop()

socket.emit('poll', { id })

socket.on('poll', (data) => {
  if (data.closed) {
    document.querySelector('#liveData').remove()
    document.querySelector('#closeText').innerText = 'This poll is closed'
    document.querySelector('#subscribeButton').remove()
    document.querySelector('#subscribeText').remove()
  }

  data.answers.forEach((answerData, index) => {
    const 
      { answer, votes, percentage } = answerData,
      answerEl = document.querySelector(`.answer-${index}`),
      votesEl = document.querySelector(`.votes-${index}`),
      textEl = document.querySelector(`.text-${index}`),
      barEl = document.querySelector(`.bar-${index}`)

    answerEl.innerText = `${answer}:`
    votesEl.innerText = `${votes} ${votes === 1 ? 'vote' : 'votes'}`
    textEl.innerHTML = `${percentage}%`
    textEl.setAttribute('x', `${percentage - 2}%`)
    barEl.setAttribute('width', `${percentage}%`)
  })
})
