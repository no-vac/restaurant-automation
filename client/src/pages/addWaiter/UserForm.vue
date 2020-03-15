<template>
    <div id="user-form">
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col-md-6">
                    <label>Username: </label>
                    <input
                            ref="first"
                            :class="{ 'has-error': submitting && invalidUsername  }"
                            v-model="user.Username"
                            type="text"
                            class="form-control"
                            @focus="clearStatus"
                            @keypress="clearStatus"
                    />
                </div>
                <div class="col-md-6">
                    <label>Password: </label>
                    <input
                            :class="{ 'has-error': submitting && invalidPassword }"
                            v-model="user.Password"
                            class="form-control"
                            type="text"
                            @focus="clearStatus"
                    />
                </div>
                <div class="col-md-6">
                    <label for="role">Role: </label>
                    <select id="role" name="roles" v-model="user.Role" @focus="clearStatus" class="form-control">
                        <option value="Admin">Admin</option>
                        <option value="Waiter">Waiter</option>
                        <option value="Kitchen">Kitchen</option>

                    </select>
                </div>
                <div class="col-md-6">
                    <label>Phone Number: </label>
                    <input
                            :class="{ 'has-error': submitting && invalidPhoneNumber }"
                            v-model="user.PhoneNumber"
                            class="form-control"
                            type="text"
                            @focus="clearStatus"
                    />
                </div>
                <div class="col-md-6">
                    <label>Email Address: </label>
                    <input
                            :class="{ 'has-error': submitting && invalidEmail }"
                            v-model="user.Email"
                            class="form-control"
                            type="text"
                            @focus="clearStatus"
                    />
                </div>
            </div>

            <div class="col-md-12 centerSpaced">
                <p v-if="error && submitting" class="error-message">
                    ! Please fill out all required fields
                </p>

                <p v-if="success" class="success-message">
                    ✅ User successfully added
                </p>

                <button class="btn btn-outline-success my-3">Add User</button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'waiter-form',
        data() {
            return {
                submitting: false,
                error: false,
                success: false,
                user: {
                    Username: '',
                    Password: '',
                    Role: '',
                    PhoneNumber: '',
                    Email: ''
                },
            }
        },
        methods: {
            handleSubmit() {
                this.submitting = true;
                this.clearStatus();

                if (
                    this.invalidUsername ||
                    this.invalidPassword ||
                    this.invalidRole ||
                    this.invalidPhoneNumber ||
                    this.invalidEmail
                ) {
                    this.error = true;
                    return
                }

                this.$emit('add:user', this.user);
                this.$refs.first.focus();
                this.user = {
                    Username: '',
                    Password: '',
                    Role: '',
                    PhoneNumber: '',
                    Email: ''
                };
                this.error = false;
                this.success = true;
                this.submitting = false;
            },
            clearStatus() {
                this.success = false;
                this.error = false;
            },
        },
        computed: {
            invalidUsername() {
                return this.user.Username == '';
            },

            invalidPassword() {
                return this.user.Password == '';
            },

            invalidRole() {
                return this.user.Role == '';
            },

            invalidPhoneNumber() {
                return this.user.PhoneNumber == '';
            },

            invalidEmail() {
                return this.user.Email == '';
            }
        }
    }
</script>

<style scoped>
    form {
        margin-bottom: 2rem;
    }

    [class*='-message'] {
        font-weight: 500;
    }

    .error-message {
        color: #d33c40;
    }

    .success-message {
        color: #32a95d;
    }

    .centerSpaced{
        text-align: center;
        margin-top: 3em;
    }
</style>
