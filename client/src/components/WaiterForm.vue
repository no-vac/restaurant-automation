<template>
    <div id="employee-form">
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col-md-6">
                    <label>Waiter First Name</label>
                    <input
                            ref="first"
                            :class="{ 'has-error': submitting && invalidFirstName  }"
                            v-model="employee.FName"
                            type="text"
                            class="form-control"
                            @focus="clearStatus"
                            @keypress="clearStatus"
                    />
                </div>
                <div class="col-md-6">
                    <label>Waiter Last Name</label>
                    <input
                            :class="{ 'has-error': submitting && invalidLastName }"
                            v-model="employee.LName"
                            class="form-control"
                            type="text"
                            @focus="clearStatus"
                    />
                </div>
                <div class="col-md-6">
                    <label>Waiter Username</label>
                    <input
                            :class="{ 'has-error': submitting && invalidUsername }"
                            v-model="employee.Username"
                            class="form-control"
                            type="text"
                            @focus="clearStatus"
                    />
                </div>
                <div class="col-md-6">
                    <label>Waiter Pin</label>
                    <input
                            :class="{ 'has-error': submitting && invalidPin }"
                            v-model="employee.pin"
                            class="form-control"
                            type="text"
                            @focus="clearStatus"
                    />
                </div>
            </div>


            <p v-if="error && submitting" class="error-message">
                ! Please fill out all required fields
            </p>

            <p v-if="success" class="success-message">
                ✅ Waiter successfully added
            </p>
            <button class="btn btn-outline-success my-3">Add Waiter</button>
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
                employee: {
                    FName: '',
                    LName: '',
                    Username: '',
                    pin: '',
                    clockInTime: '2020-01-01T20:15:00.000Z',
                    clockOutTime: '2020-01-02T01:00:00.000Z'
                },
            }
        },
        methods: {
            handleSubmit() {
                this.submitting = true;
                this.clearStatus();

                if (
                    this.invalidFirstName ||
                    this.invalidLastName ||
                    this.invalidUsername ||
                    this.invalidPin
                ) {
                    this.error = true;
                    return
                }

                this.$emit('add:employee', this.employee);
                this.$refs.first.focus();
                this.employee = {
                    FName: '',
                    LName: '',
                    Username: '',
                    Pin: ''
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
            invalidFirstName() {
                return this.employee.FName == '';
            },

            invalidLastName() {
                return this.employee.LName == '';
            },

            invalidUsername() {
                return this.employee.Username == '';
            },

            invalidPin() {
                return this.employee.pin == '';
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
</style>