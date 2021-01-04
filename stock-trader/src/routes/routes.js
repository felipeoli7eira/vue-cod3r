import Vue from 'vue'
import Router from 'vue-router'

/* components */
import HomeApp from '@/components/home'
import Portfolio from '@/components/portfolio/portfolio'
import Stocks from '@/components/stocks/stocks'

/* insert router in vue */
Vue.use(Router)

export default new Router(
    {
        mode: 'history',
        routes: [
            {
                path: '/',
                component: HomeApp
            },
            {
                path: '/portfolio',
                component: Portfolio
            },
            {
                path: '/stocks',
                component: Stocks
            }
        ]
    }
)