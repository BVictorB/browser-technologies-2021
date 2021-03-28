const 
  btn = document.querySelector('#subscribeButton'),
  text = document.querySelector('#subscribeText'),
  pollId = window.location.pathname.split('/').pop()

const urlBase64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  
  return outputArray
}

const subscribe = async _ => {
  const register = await navigator.serviceWorker.register('/sw.js')
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(vapidKey)
  })

  btn.innerHTML = 'Subscribed!'
  btn.classList.add('active-button')

  await fetch('/subscribe', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      subscription: subscription,
      id: pollId
    })
  })
}

if ('serviceWorker' in navigator) {
  btn.style.display = 'block'
  text.style.display = 'block'
  if (!btn.classList.contains('active-button')) {
    btn.addEventListener('click', subscribe)
  }
}
