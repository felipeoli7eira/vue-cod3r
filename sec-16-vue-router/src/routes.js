import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import User from '@/components/user/User'

Vue.use(Router)

export default new Router(
    {
        mode: 'hash', // or history
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                path: '/usuario/:id',
                component: User
            }
        ]
    }
)