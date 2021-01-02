import './style.css'
import Vue from 'vue'
import App from './App.vue'
import AppRoutes from '@/routes'

Vue.config.productionTip = false

new Vue({
  router: AppRoutes,
  render: h => h(App),
}).$mount('#app')
