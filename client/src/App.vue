<template>
    <div>
        <nav-bar/>
        <div id="app" class="container-fluid">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import NavBar from "./components/common/NavBar";

    export default {
        name: 'app',
        components: {
            NavBar,
        },
        data() {
            return {
                admin: {
                    Username: '',
                    Password: ''
                },
                res: [],
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

<style scoped>
    .space{
        margin-top: 1em;
    }
</style>
