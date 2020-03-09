<template>
    <div class="card" style="width: 25em; margin: auto; margin-top: 10rem;" id="loginPage">
        <div class="card-body">
            <h5 class="card-title my-1">
                Login
            </h5>
            <h6 class="card-subtitle mb-2 text-muted my-1">
                Admin login
            </h6>
            <form @submit.prevent="Login">
                <div class="row">
                    <div class="col-12">
                        <label>Username</label>
                        <input
                                ref="first"
                                v-model="admin.Username"
                                type="text"
                                class="form-control"
                        />

                        <label>Password</label>
                        <input
                                ref="first"
                                v-model="admin.Password"
                                type="text"
                                class="form-control"
                        />

                    </div>
                </div>
                <button class="btn btn-outline-primary my-3" type="submit">Login</button>
            </form>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                submitting: false,
                error: false,
                success: false,
                admin: {
                    Username: '',
                    Password: ''
                }
            }
        },
        methods: {
            async Login(admin){
                try{
                    const res = await fetch('http://localhost:500/api/u', {
                        method: 'GET',
                        body: JSON.stringify(admin),
                        headers: {'Content-type': 'application/json; charset=UTF-8'}
                    });
                    const data = await res.data();
                    this.admin = data;
                }catch (e) {
                    console.log(e);
                }
            }
        },
        computed: {
            invalidUsername() {
                return this.admin.Username == '';
            },

            invalidPassword() {
                return this.admin.Password == '';
            }

        }

    }
</script>

<style scoped>

</style>