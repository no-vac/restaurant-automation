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
                <div class="row">
                    <div class="col-12">
                        <label>Username</label>
                        <input
                                ref="first"
                                v-model="admin.Username"
                                type="text"
                                class="form-control"
                                @focus="clearStatus"
                                @keypress="clearStatus"
                        />

                        <label>Password</label>
                        <input
                                ref="first"
                                v-model="admin.Password"
                                type="text"
                                class="form-control"
                                @focus="clearStatus"
                                @keypress="clearStatus"
                        />

                    </div>
                </div>
                <button class="btn btn-outline-primary my-3">Login</button>
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
            handleSubmit() {
                this.submitting = true;
                // clear status

                if (this.invalidUsername || this.invalidPassword) {
                    this.error = true;
                    return;
                }

                this.$refs.first.focus();
                this.admin = {
                    Username: '',
                    Password: ''
                };

                this.error = false;
                this.success = true;
                this.submitting = false;
            },

            clearStatus() {
                this.success = false,
                    this.error = false
            },
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