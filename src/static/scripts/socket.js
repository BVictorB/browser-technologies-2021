document.querySelector('#refreshButton').remove()
document.querySelector('#liveData').style.display = 'inline-block'

const socket = io.connect('http://localhost:4000')
const id = window.location.pathname.split('/').pop()

socket.emit('poll', { id })

socket.on('poll', (data) => {
  data.answers.forEach((answerData, index) => {
    const { answer, votes, percentage } = answerData
    const 
      answerEl = document.querySelector(`.answer-${index}`),
      votesEl = document.querySelector(`.votes-${index}`),
      textEl = document.querySelector(`.text-${index}`),
      barEl = document.querySelector(`.bar-${index}`)

      console.log(textEl)

    answerEl.innerText = `${answer}:`
    votesEl.innerText = `${votes} ${votes === 1 ? 'vote' : 'votes'}`
    textEl.innerHTML = `${percentage}%`
    textEl.setAttribute('x', `${percentage - 2}%`)
    barEl.setAttribute('width', `${percentage}%`)
  })
})
