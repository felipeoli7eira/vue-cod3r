<template>
    <div class="user-detail">
        <h3>Detalhe do usuário</h3>
        <h1>user: {{id}}</h1>
        <!-- <router-link tag="button" primario :to="`/usuario/${id}/configuracoes`">
            Editar
        </router-link> -->

        <!-- <router-link tag="button" primario :to="`/usuario/${$route.params.id}/configuracoes`">
            Editar
        </router-link> -->

        <!-- <router-link tag="button" primario :to="{ name: 'user.edit', params: {id} }">
            Editar
        </router-link> -->

        <router-link
            tag="button"
            primario
            :to="{
                name: 'user.edit',
                params: {id: $route.params.id},
                query: {
                    verif: false,
                    lang: 'pt-br'
                },

                hash: '#footer'
            }"
        >
            Editar
        </router-link>
    </div>
</template>

<script>

    export default {
        props: ['id'],

        beforeRouteEnter(to, from, next)
        {
            console.log('BeforeRouteEnter()')
            // next()

            // next(componentInstance => {

            //     console.log(componentInstance.id)
            // })

            let authorized = true

            authorized ? next() : next(false)
        }
    }

</script>

<style>

</style>