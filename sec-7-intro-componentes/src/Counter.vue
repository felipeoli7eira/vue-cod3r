<template>
    <div class="counter">
        <span>{{counter}}</span>
        <button @click="plusplus()">+</button>
        <button @click="lessless()">-</button>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                counter: 0
            }
        },

        methods: {

            plusplus() {
                this.counter ++
            },

            lessless() {
                this.counter --
            }
        }

    }

</script>

<style>

</style>