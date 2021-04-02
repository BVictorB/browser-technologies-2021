const 
  form = document.querySelector('#createPoll'),
  inputs = form.querySelectorAll('input'),
  dateValidator = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
  timeValidator = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/

const validateForm = (e) => {
  const target = e.target ? e.target : e
  const defaultErr = 'Please fill in this field'

  const createError = (msg) => {
    target.nextElementSibling.classList.replace('no-error-message', 'error-message')
    target.nextElementSibling.innerHTML = msg
    target.classList.add('error')
    target.classList.remove('no-error')
  }

  const removeError = () => {
    target.classList.remove('no-error')
    target.classList.remove('error')
    target.nextElementSibling.classList.replace('error-message', 'no-error-message')
  }

  const checkDate = () => {
    console.log(target.value)
    if (!target.value.match(dateValidator)) {
      const err = 'Please fill in the date using format dd/mm/yyyy'
      createError(err)
    } else if (target.value.length === 0) {
      createError(defaultErr)
    } else {
      removeError()
    }
  }

  const checkTime = () => {
    if (!target.value.match(timeValidator)) {
      const err = 'Please fill in the time using format hh:mm'
      createError(err)
    } else if (target.value.length === 0) {
      createError(defaultErr)
    } else {
      removeError()
    }
  }

  const checkDefault = () => {
    if (target.value.length === 0) {
      createError(defaultErr)
    } else {
      removeError()
    }
  }

  const checkTarget = () => {
    if (target.name === 'time') {
      checkTime()
    } else {
      checkDefault()
    }
  }

  checkTarget()
}

inputs.forEach(input => input.addEventListener('blur', validateForm))

form.addEventListener('submit', e => {
  e.preventDefault()
  let errors = false

  inputs.forEach(input => {
    validateForm(input)
    if (input.classList.contains('no-error') || input.classList.contains('error') || parseInt(window.formTotal) === 0) {
      errors = true
    }
  })

  if (!errors) {
    form.setAttribute('action', e.submitter.getAttribute('formaction'))
    form.submit()
  }
})
