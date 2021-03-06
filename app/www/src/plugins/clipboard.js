import Vue from 'vue'

Vue.prototype.$clipboard = function (text, toastText = 'Copied to clipboard!') {
  const el = document.createElement('textarea')

  el.value = text
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)

  this.$store.dispatch('app/showToast', toastText)
}
