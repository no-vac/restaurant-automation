<template>
    <div id="loginPage">
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col-12">
                    <label>Username</label>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login Page',
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

                this.$emit('')

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