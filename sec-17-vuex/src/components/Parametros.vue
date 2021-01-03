<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
    computed: {
        quantidade: {
            get()
            {
                return this.$store.state.quantidade
            },

            set(args)
            {
                this.$store.commit('setQtt', args)
            }
        },
        preco: {
            get()
            {
                return this.$store.state.preco
            },

            set(args)
            {
                this.$store.commit('setPrice', args)
            }
        }
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
