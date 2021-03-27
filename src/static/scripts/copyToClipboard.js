const 
  input = document.querySelector('#copyInput'),
  url = input.value

input.addEventListener('click', () => {
  navigator.clipboard.writeText(url)
    .then(_ => {
      input.value = 'Copied!'
      setTimeout(() => {
        input.value = url
      }, 2000)
    })
    .catch(_ => input.value = 'Failed..')
})
