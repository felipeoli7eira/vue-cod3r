export default {
    state: {
        stocks: []
    },

    mutations: {
        setStock(state, payload)
        {
            state.stocks = payload
        }
    }
}