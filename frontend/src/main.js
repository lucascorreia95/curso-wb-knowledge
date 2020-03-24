import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6Ikx1Y2FzIiwiZW1haWwiOiJsdWNhc0BlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTg0OTkwNzQwLCJleHAiOjE1ODUyNDk5NDB9.G63x_KXl7Nqql8_DTzTuuYAbrQAwF7fC0-xvpMyXo7g'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')