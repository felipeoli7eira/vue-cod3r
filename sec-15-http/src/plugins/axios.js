/* eslint-disable */
import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-60176.firebaseio.com/'

/** setando headers padrão em todas as requisições (Global) */
// axios.defaults.headers.commom['Authorization'] = '...token...'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use(
    {
        install(Vue)
        {
            // Vue.prototype.$http = axios

            Vue.prototype.$http = axios.create(
                {
                    baseURL: 'https://curso-vue-60176.firebaseio.com/',
                    headers: {
                        get: {
                            'Authorization': '...token...'
                        }
                    }
                }
            )

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
                    console.log(response)
                },
                error => console.log(error)
            )
        }
    }
)