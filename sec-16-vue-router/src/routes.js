import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import User from '@/components/user/User'
import UserList from '@/components/user/List'
import UserInfo from '@/components/user/Detail'
// import UserEdit from '@/components/user/Edit'

const UserEdit = () => import(/* webpackChunkName: "chunkName" */ '@/components/user/Edit') // lazy load

import Menu from '@/components/NavBar'
import MenuAlt from '@/components/NavBarAlt'

Vue.use(Router)

const routes = new Router(
    {
        mode: 'hash', // or history

        scrollBehavior(to, from, savedPosition)
        {
            if(savedPosition)
            {
                return savedPosition
            }

            if(to.hash)
            {
                return { selector: to.hash }
            }

            return { x: 0, y: 0 }
        },

        routes: [
            {
                path: '/',
                // component: Home
                components: {
                    default: Home,
                    menu: Menu
                }
            },

            // {
            //     path: '/usuario/:id',
            //     component: User,
            //     props: true // evita ter que pegar parâmetros através de this.$route.params.? e ter que escutar as alterações do parâmetro com um watch: { $route() }
            // }

            {
                path: '/usuario',
                // component: User,
                components: {
                    default: User,
                    menu: MenuAlt,
                    menuFooter: MenuAlt
                },
                props: true,
                children: [
                    {
                        path: '',
                        component: UserList,
                        props: true
                    },
                    {
                        path: ':id',
                        component: UserInfo,
                        props: true
                    },
                    {
                        path: ':id/configuracoes',
                        component: UserEdit,
                        props: true,
                        name: 'user.edit',
                        beforeEnter: (to, from, next) => {
                            console.log('Antes de entrar em /usuario/editar (local)')
                            next()
                        }
                    }
                ]
            },

            {
                path: '/redirect',
                redirect: '/'
            },

            {
                path: '*', // fallback
                redirect: '/' // 404 screen
            }
        ]
    }
)

routes.beforeEach(
    (to, from, next) => {
        console.log('Antes de cada rota: Global')
        next()
        // next(false)
        // next('/qualquer-rota')

        // if(to.path != '/')
        // {
        //     next('/')
        // }
        // else
        // {
        //     next()
        // }
    }
)

export default routes