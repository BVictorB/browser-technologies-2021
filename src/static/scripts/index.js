const 
  jsCookieMessage = document.querySelector('#jsCookieMessage'),
  addInputs = document.querySelector('#addInputs'),
  answerContainer = document.querySelector('#answerContainer')

if (!navigator.cookieEnabled) {
  jsCookieMessage.innerHTML = 'Please enable cookies to get the best experience on this website.'
} else {
  jsCookieMessage.style.display = 'none'
}

if (addInputs) {
  addInputs.addEventListener('submit', (e) => {
    e.preventDefault()
    const amount = e.target.querySelector('input').value
    const answers = Array.from(Array(Number(amount)).keys())

    answerContainer.innerHTML = ''
    
    answers.forEach(answer => {
      const label = document.createElement('label')
      const input = document.createElement('input')
      input.type = 'text'
      input.name = 'answers'
      label.innerHTML = `Answer ${answer + 1}`
      label.appendChild(input)
      answerContainer.appendChild(label)
    })
  })
}
