<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>

// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1
        }
    },

    computed: {
        quantidade()
        {
            return this.$store.state.quantidade
        },
        preco()
        {
            return this.$store.state.preco
        }
    },

    methods: {

        // ...mapMutations(['addProduct']),
        ...mapActions(['addProduct']),

        adicionar() {
            const product = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            // this.$store.state.products.push(produto)

            // this.$store.commit('addProduct', product)

            // this.addProduct(product) // mutation

            // this.addProduct(product)

            this.$store.dispatch('addProduct', product)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
