<template>
    <nav v-if="loggedIn" >
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'login'}">Login</router-link>
        <router-link :to="{name: 'addWaiter'}">add</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>