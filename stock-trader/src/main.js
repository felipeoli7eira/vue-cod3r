import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Router from '@/routes/routes'

Vue.config.productionTip = false

new Vue(
	{
		router: Router,
		render: h => h(App),
	}
).$mount('#app')

// parou na aula 304 módulo: StockTrad