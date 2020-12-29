import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('hightlight',
	{
		/* eslint-disable-next-line */
		bind(el, binding, vnode)
		{
			// <p v-hightlight>...</p>
			// el.style.backgroundColor = 'lightgreen'

			// <p v-hightlight="lightgreen">...</p>
			el.style.backgroundColor = binding.value
		}
	}
)

new Vue({
	render: h => h(App),
}).$mount('#app')
