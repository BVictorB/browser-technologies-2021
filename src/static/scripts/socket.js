const socket = io.connect('http://localhost:4000')
const id = window.location.pathname.split('/').pop()

socket.emit('poll', { id })

socket.on('poll', (data) => {
  data.answers.forEach((answer, index) => {
    const answerElement = document.querySelector(`.answer-${index}`)
    const votesElement = document.querySelector(`.votes-${index}`)
    answerElement.innerText = answer.answer
    votesElement.innerText = answer.votes
  })
})
