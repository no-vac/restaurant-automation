<template>
    <div id="loginUser">
        <login-form @add:user="LoginUser" />
    </div>
</template>

<script>
    import LoginForm from './Login';
    import router from '../../routes';
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
                try{
                    const response = await fetch('http://127.0.0.1:5000/api/u/login', {
                        method: 'POST',
                        body: JSON.stringify(user),
                        headers: {'Content-type': 'application/json; chartset=UTF-8'}
                    });

                    const data = await response.json();
                    this.users = [...this.users, data];

                    if(data != null || data == []){
                        router.push('/addUser');
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>

