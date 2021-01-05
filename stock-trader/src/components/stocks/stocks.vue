<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>

    /* components */
    import Stock from '@/components/stocks/stock'

    export default {
        name: 'Stocks',
        components: { Stock },

        data()
        {
            return {
                stocks: [
                    {
                        id: 1,
                        name: 'BMW',
                        qtt: 5,
                        price: 105.50
                    },
                    {
                        id: 2,
                        name: 'Google',
                        qtt: 2,
                        price: 730.21
                    },
                    {
                        id: 3,
                        name: 'Apple',
                        qtt: 1,
                        price: 600
                    },
                    {
                        id: 4,
                        name: 'Microsoft',
                        qtt: 4,
                        price: 300.70
                    },
                ]
            }
        }
    }

</script>

<style>

</style>