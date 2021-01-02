<template>
    <div class="user">
        <h1>user: {{userID}}</h1>
        <button @click="goToHome" sucesso>home</button>
    </div>
</template>

<script>
export default {

    data()
    {
        return {
            userID: this.$route.params.id
        }
    },

    watch: {
        $route(to, from)
        {
            this.userID = to.params.id
        }
    },

    methods: {
        goToHome()
        {
            // this.$router.push('/')
            this.$router.push(
                {
                    path: '/'
                }
            )
        }
    }

}
</script>

<style>

</style>