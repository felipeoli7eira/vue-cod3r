import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {

        state: {
            products: [],
            quantidade: 5,
            preco: 10.23
        },

        getters: {
            total(state)
            {
                return state.products.map(product => product.quantidade * product.preco)
                .reduce(
                    (total, current) => total + current,
                    0
                )
            }
        },

        mutations: {
            addProduct(state, payload)
            {
                state.products.push(payload)
            },

            setQtt(state, args)
            {
                state.quantidade = args
            },

            setPrice(state, args)
            {
                state.preco = args
            },
        },

        actions: {
            addProduct(context, payload)
            {
                setTimeout(
                    () => context.commit('addProduct', payload), 2000
                )
            }
        }
    }
)