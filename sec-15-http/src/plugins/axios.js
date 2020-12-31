/* eslint-disable */
import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-60176.firebaseio.com/'

Vue.use(
    {
        install(Vue)
        {
            Vue.prototype.$http = axios

            // interceptor de requisição
            Vue.prototype.$http.interceptors.request.use(
                config => {
                    console.log(config.method)

                    return config
                },

                error => console.log(error)
            )

            Vue.prototype.$http.interceptors.response.use(
                response => {
                    console.log(reponse)
                },
                error => console.log(error)
            )
        }
    }
)