<template>
    <div class="user-edit">
        <h3>Editar usuário</h3>
        <h1>user: {{id}}</h1>
        <h4>$route.params.id ( {{$route.params.id}} )</h4>

        <h3>Verificado: {{$route.query.verif ? 'Sim' : 'Não'}}</h3>
        <h3>Tradução: {{$route.query.lang}}</h3>

        <button @click="completed = true">terminar</button>

        <footer id="footer">
            <p>Footer</p>
        </footer>
    </div>
</template>

<script>

    export default {
        props: ['id'],

        data()
        {
            return {
                completed: false
            }
        },

        beforeRouteLeave(to, from, next)
        {
            if(this.completed)
            {
                next()
            }
            else
            {
                if (confirm('Terminou?'))
                {
                    next()
                }
                else
                {
                    next(false)
                }
            }
        }
    }

</script>

<style>
    #footer
    {
        margin-top: 2000px;
    }
</style>