const 
  jsCookieMessage = document.querySelector('#jsCookieMessage'),
  addInputs = document.querySelector('#addInputs'),
  answerContainer = document.querySelector('#answerContainer'),
  addAnswer = document.querySelector('#addAnswer')

if (!navigator.cookieEnabled) {
  jsCookieMessage.innerHTML = 'Please enable cookies to get the best experience on this website.'
} else {
  jsCookieMessage.style.display = 'none'
}

if (addInputs) {
  addInputs.remove()
}

if (addAnswer) {
  addAnswer.style.display = 'block'

  const addRemoveButtonListeners = () => {
    const removeButtons = document.querySelectorAll('.removeAnswer')
    removeButtons.forEach(removeButton => {
      removeButton.style.display = 'inline-block'
      removeButton.addEventListener('click', (e) => {
        e.target.parentElement.remove()
      })
    })
  }

  addRemoveButtonListeners()

  addAnswer.addEventListener('click', () => {
    const 
      inputAmount = answerContainer.querySelectorAll('label').length,
      label = document.createElement('label'),
      input = document.createElement('input'),
      p = document.createElement('p'),
      closeButton = document.createElement('span')

    closeButton.innerHTML = 'x'
    closeButton.classList.add('removeAnswer')
    input.type = 'text'
    input.name = 'answers'
    input.classList.add('no-error')
    p.classList.add('no-error-message')
    label.innerHTML = `Answer ${inputAmount + 1}`
    label.appendChild(closeButton)
    label.appendChild(input)
    label.appendChild(p)
    answerContainer.appendChild(label)
    addRemoveButtonListeners()
  })
}