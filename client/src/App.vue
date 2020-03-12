<template>
    <div v-if="loggedIn">
        <nav-bar/>
        <div id="app" class="container-fluid">
            <router-view/>
        </div>
    </div>
    <div v-else>
        <login-page />
    </div>
</template>

<script>
    import NavBar from "./components/common/NavBar";
    import LoginPage from "./pages/Login";
    import axios from 'axios'

    export default {
        name: 'app',
        components: {
            NavBar,
            LoginPage
        },
        data() {
            return {
                admin: {
                    Username: '',
                    Password: ''
                },
                res: [],
                loggedIn: false,
            }
        },
        mounted() {
            //this.checkLoggedIn();
        },
        methods: {
            checkLoggedIn: function() {

            }

            /* addEmployee(employee){
              const lastId = this.employees.length > 0 ? this.employees[this.employees.length - 1].id : 0;
              const id = lastId + 1;
              const newEmployee = {...employee, id};
              this.employees =[ ...this.employees, newEmployee];
            },

             deleteEmployee(id){
              this.employees = this.employees.filter(
                      employee => employee.id !== id
              )
            },

            editEmployee(id, updatedEmployee){
              this.employees = this.employees.map(
                      employee => employee.id === id ?updatedEmployee : employee
              )
            }, */

            /*async checkLoggedIn(admin) {
                try {
                    const response = await fetch('', {
                        method: 'GET',
                        body: JSON.stringify(admin),
                        headers: {'Content-type': 'application/json; charset=UTF-8'}
                    });
                    const data = await response.json();
                    this.admin = data;
                } catch (e) {
                    console.log(e);
                }
            },*/
        }
    }
</script>
