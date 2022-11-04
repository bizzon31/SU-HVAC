// <!-- Js-location: myscript/scrypt -->

import * as bootstrap from 'bootstrap'

// Скрипт отображает всплывающий блок
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

console.log("text from script")