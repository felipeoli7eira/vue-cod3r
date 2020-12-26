<template>
    <div class="componente">
        <p>Nome: <strong>{{ invertName() }}</strong></p>
        <p>Idade: <strong>{{ age }}</strong></p>

        <button @click="resetName()">Reset</button>
        <button @click="callback()">callback</button>
    </div>
</template>

<script>
    import EventBus from '@/EventBus'

export default {
    props: {
        name: {
            type: String,
            default: '...'
        },

        callback: {
            type: Function
        },

        age: Number
    },

    methods: {
        invertName() {
            return this.name.split('').reverse().join('')
        },

        resetName() {
            this.name = 'Pedro'

            this.$emit('resetEvent', this.name)
        }
    },

        created()
        {
            EventBus.$on('changeAge', ($event) => {

                this.age = $event
            })
        }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
