const jsCookieMessage = document.querySelector('#jsCookieMessage')

if (!navigator.cookieEnabled) {
  jsCookieMessage.innerHTML = 'Please enable cookies to get the best experience on this website.'
} else {
  jsCookieMessage.style.display = 'none'
}
