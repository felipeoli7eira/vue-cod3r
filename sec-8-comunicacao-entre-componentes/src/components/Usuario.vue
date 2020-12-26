<template>
    <div class="container">
        <p>Nome: {{name}}</p>
        <p>Idade: {{age}}</p>
        <button @click="changeName()">change name</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :name="name" @resetEvent="setName($event)" :callback="callback" :age="age" />
            <app-usuario-editar :age="age" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },

    data() {
        return {
            name: 'Pedro',
            age: 23
        }
    },

    methods: {
        changeName() {
            this.name = 'Anna'
        },

        setName($event)
        {
            this.name = $event
        },

        callback() {
            this.name = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
