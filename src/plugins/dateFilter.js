import Vue from 'vue'

Vue.filter('convertTime', function(value) {
  if (!value) return ''
  return `${new Date(value).getHours()}:${new Date(value).getMinutes()}`
})

Vue.filter('convertDate', function(value) {
  if (!value) return ''
  return `${new Date(value).getMonth() + 1}月${new Date(value).getDay()}日`
})
