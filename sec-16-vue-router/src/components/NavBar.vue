<template>
    <nav class="menu">
        <ul>
            <li>
                <router-link exact to="/" active-class="active">Home</router-link>
            </li>
            <router-link exact to="/usuario" tag="li" active-class="active">
                <a>Usuário</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>