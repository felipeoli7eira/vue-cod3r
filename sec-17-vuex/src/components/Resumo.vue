<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    // computed: mapGetters(['total'])

    computed: mapGetters(
        {
            total: 'total'
        }
    )

    // computed: {
    //     total() {
    //         return this.$store.getters.total
    //     }
    // }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
