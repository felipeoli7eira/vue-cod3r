<template>
    <v-app>
        <Header />
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

    /* components */
    import Header from '@/components/header'

    export default {
        components: { Header }
    }

</script>

<style>

</style>

