<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat to="/">home</v-btn>
            <v-btn flat to="/portfolio">portfólio</v-btn>
            <v-btn flat to="/stocks">ações</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn flat>Finalizar dia</v-btn>
            <v-menu offset-y>
                <v-btn flat slot="activator">salvar & carregar</v-btn>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title>salvar dados</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-title>carregar dados</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>

    export default {

    }

</script>

<style>

</style>