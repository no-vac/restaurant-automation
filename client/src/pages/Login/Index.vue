<template>
    <div id="loginUser">
        <login-form @add:user="LoginUser" />
    </div>
</template>

<script>
    import LoginForm from './Login';
    //import router from '../../routes';
    import axios from 'axios';
    export default {
        name: 'Login',
        components: {
            LoginForm,
        },
        data() {
            return {
                users: []
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
                            this.$router.push('addUser');
                        }
                    })
                    .catch((e) => {
                        console.log('Yikes ' + e)
                    });
            }

        }
    }
</script>

