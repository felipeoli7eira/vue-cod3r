<template>
    <div class="user">
        <!-- <h1>user: {{userID}}</h1> -->
        <!-- <h1>user: {{id}}</h1> -->

        <transition enter-active-class="animated rubberBand" leave-active-class="animated rollOut">
            <router-view />
        </transition>
        <button @click="goToHome" sucesso>home</button>
        <router-view name="menu" />
        <router-view name="menuFooter" />
    </div>
</template>

<script>
export default {

    // props: ['id'],

    // data()
    // {
    //     return {
    //         userID: this.$route.params.id
    //     }
    // },

    // watch: {
    //     $route(to, from)
    //     {
    //         this.userID = to.params.id
    //     }
    // },

    methods: {
        goToHome()
        {
            // this.$router.push('/')
            this.$router.push(
                {
                    path: '/'
                }
            )
            // this.$router.push( {name: 'router.name'} )
        }
    }

}
</script>

<style>

</style>