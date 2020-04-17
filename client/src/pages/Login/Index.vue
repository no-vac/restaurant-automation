<template>
    <div id="loginUser">
        <login-form
                @add:user="LoginUser"
        />
    </div>
</template>

<script>
    import LoginForm from './Login';
    //import router from '../../routes';
    import axios from 'axios';
    import { globalStore } from '../../main';
    export default {
        name: 'Login',
        components: {
            LoginForm,
        },
        data() {
            return {
                users: [],
                isLoggedOn: false,
            }
        },
        mounted() {
            //check if logged in
        },
        methods: {
            async LoginUser(user) {
                axios
                    .post('http://127.0.0.1:5000/api/u/login', user)
                    .then((response) => {
                        console.log(response);
                        if(response !== null){
                            this.$router.push('dashboard');
                            this.$session.start();
                            this.$session.set('userId', response.body.)
                            this.isLoggedOn = true;
                        }
                    })
                    .catch((e) => {
                        console.log('Yikes ' + e)
                    });
            },
        }
    }
</script>

