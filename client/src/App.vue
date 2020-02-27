<template>
    <div id="app" class="container">
        <nav>
            <router-link :to="{name: 'home'}">Home</router-link>
            <router-link :to="{name: 'login'}">Login</router-link>
        </nav>
        <router-view />
        <h1>Waiters</h1>
        <br/>

        <employee-form
                @add:employee="addEmployee"
        />
        <employee-table
                :employees="employees"
                @delete:employee="deleteEmployee"
                @edit:employee="editEmployee"
        />
    </div>
</template>

<script>
    import EmployeeTable from "./components/WaiterTable";
    import EmployeeForm from "./components/WaiterForm";

    export default {
        name: 'app',
        components: {
            EmployeeForm,
            EmployeeTable,
        },
        data() {
            return {
                employees: [],
            }
        },
        mounted() {
            this.getEmployees()
        },
        methods: {
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
            async getEmployees() {
                try {
                    const response = await fetch('http://127.0.0.1:5000/api/w');
                    const data = await response.json();
                    this.employees = data
                } catch (error) {
                    console.log(error)
                }
            },
            async addEmployee(employee) {
                try {
                    const response = await fetch('http://127.0.0.1:5000/api/w', {
                        method: 'POST',
                        body: JSON.stringify(employee),
                        headers: {'Content-type': 'application/json; chartset=UTF-8'}
                    });
                    const data = await response.json();
                    this.employees = [...this.employees, data]
                } catch (error) {
                    console.log(error)
                }
            },
            async editEmployee(id, updatedEmployee) {
                try {
                    const response = await fetch(`http://127.0.0.1:5000/api/${id}`, {
                        method: 'PUT',
                        body: JSON.stringify(updatedEmployee),
                        headers: {'Content-type': 'application/json; chartset=UTF-8'}
                    });
                    const data = await response.json();
                    this.employees = this.employees.map(employee => (employee.id === id ? data : employee))
                } catch (error) {
                    console.log(error)
                }
            },
            async deleteEmployee(id) {
                try {
                    await fetch(`http://127.0.0.1:5000/api/w/${id}`, {
                        method: 'DELETE'
                    });
                    this.employees = this.employees.filter(employee => employee.id !== id);
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style>
    button {
        background: #009435;
        border: 1px solid #009435;
    }

    .small-container {
        max-width: 680px;
    }
</style>
