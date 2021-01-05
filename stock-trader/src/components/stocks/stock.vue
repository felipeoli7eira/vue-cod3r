<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} <small>(preço: {{ stock.price }})</small></strong>
            </v-card-title>
        </v-card>

        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" v-model.number="qtt" />
                <v-btn @click="buyStock" class="green darken-3 white--text" :disabled="qtt <= 0 || !Number.isInteger(qtt)">comprar</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>

    export default {
        name: 'Stock',
        props: ['stock'],

        data()
        {
            return {
                qtt: 0
            }
        },

        methods: {
            buyStock()
            {
                let order = {
                    stock_id: this.stock.id,
                    stock_price: this.stock.price,
                    stock_qtt: this.qtt
                }

                console.log(order)

                this.qtt = 0
            }
        }
    }

</script>

<style>

</style>