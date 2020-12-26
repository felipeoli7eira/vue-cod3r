<template>
    <div class="componente">
        <p>Idade: {{age}}</p>
        <button @click="changeAge()">chane age</button>
    </div>
</template>

<script>

    import EventBus from '@/EventBus'

export default {
    props: {
        age: {
            type: Number
        }
    },


    methods: {


        changeAge()
        {
            this.age = 100
            EventBus.$emit('changeAge', this.age)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
