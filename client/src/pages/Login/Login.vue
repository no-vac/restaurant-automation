<template>
    <div class="card" style="width: 25em; margin: auto; margin-top: 10rem;" id="loginPage">
        <div class="card-body">
            <h5 class="card-title my-1">
                Login
            </h5>
            <h6 class="card-subtitle mb-2 text-muted my-1">
                Admin login
            </h6>
            <form @submit.prevent="handleSubmit">
                <div>
                    <div class="row">
                        <div class="col-12">
                            <label>Username</label>
                            <input
                                    ref="first"
                                    class="form-control"
                                    v-model="user.Username"
                                    @focus="clearStatus"
                                    @keypress="clearStatus"
                            />
                            <label>Password</label>
                            <input
                                    type="text"
                                   class="form-control"
                                   v-model="user.Password"
                                   @focus="clearStatus"
                            />
                        </div>
                    </div>
                </div>
                <button class="btn btn-outline-success my-3">Login</button>
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
                user: {
                    Username: '',
                    Password: ''
                }
            }
        },
        methods: {
            handleSubmit() {
                this.submitting = true;
                this.clearStatus();

                this.$emit('add:user', this.user);
                this.$refs.first.focus();
                this.user = {
                    Username: '',
                    Password: ''
                };
                this.error = false;
                this.success = true;
                this.submitting = false;
            },
            clearStatus() {
                this.success = false;
                this.error = false;
            }
        },
        computed: {
            invalidUsername() {
                return this.user.Username == '';
            },

            invalidPassword() {
                return this.user.Password == '';
            }

        }

    }
</script>

<style scoped>

</style>
