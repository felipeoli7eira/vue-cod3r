<template>
    <nav class="menu">
        <ul>
            <li>
                <router-link exact to="/" active-class="active">Home</router-link>
            </li>
            <router-link exact to="/usuario/1" tag="li" active-class="active">
                <a>Usuário 1</a>
            </router-link>

            <router-link exact to="/usuario/2" tag="li" active-class="active">
                <a>Usuário 2</a>
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