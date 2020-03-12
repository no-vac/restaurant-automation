<template>
    <div class="card" style="width: 25em; margin: auto; margin-top: 10rem;" id="loginPage">
        <div class="card-body">
            <h5 class="card-title my-1">
                Login
            </h5>
            <h6 class="card-subtitle mb-2 text-muted my-1">
                Admin login
            </h6>
            <form v-on:submit="login">
                <div class="row">
                    <div class="col-12">
                        <label>Username</label>
                        <input ref="first"  name="Username" type="text" class="form-control" />
                        <label>Password</label>
                        <input name="Password" type="text" class="form-control" />
                    </div>
                </div>
                <input class="btn btn-outline-primary my-3" type="submit" value="Login" />
            </form>

        </div>
    </div>
</template>

<script>
    import router from '../routes';
    import axios from "axios";

    export default {
        name: 'Login',
        methods: {
            login: (e) => {
                e.preventDefault();
                let Username = e.target.elements.Username.value;
                let Password = e.target.elements.Password.value;
                let login = () => {
                    let data = {
                        Username: Username,
                        Password: Password
                    };

                    axios
                        .post("/api/u/login", data)
                        .then((response) => {
                            console.log("Logged In" + response);
                            router.push("/addWaiter");
                        })
                        .catch((e) => {
                            console.log("Cannot Login " + e);
                        })
                };
                login();
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
