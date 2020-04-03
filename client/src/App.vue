<template>
    <div>
        <nav-bar/>
        <div id="app" class="container-fluid">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import NavBar from "./components/common/NavBar";
    //import axios from 'axios';
    import {globalStore} from "./main";

    export default {
        name: 'app',
        components: {
            NavBar,
        },
        data() {
            return {
                user: {
                    Username: '',
                    Password: ''
                },
                isLoggedOn: globalStore.isLoggedOn,
            }
        },
        mounted() {
            this.checkLoggedIn();
        },
        methods: {
            async checkLoggedIn(){
                console.log(this.isLoggedOn);
            }
        }
    }
</script>

<style scoped>
    .space{
        margin-top: 1em;
    }
</style>
