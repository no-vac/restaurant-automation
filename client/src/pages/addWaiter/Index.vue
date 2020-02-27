<template>
    <div id="addingWaiter">
        <waiter-form
                @add:employee="addEmployee"
        />
        <waiter-table
                :employees="employees"
                @delete:employee="deleteEmployee"
                @edit:employee="editEmployee"
        />
    </div>
</template>

<script>
    import WaiterTable from './WaiterTable';
    import WaiterForm from "./WaiterForm";

    export default {
        name: 'add waiter',
        components: {
            WaiterForm,
            WaiterTable
        },
        data() {
            return {
                employees: []
            }
        },
        mounted() {
            this.getEmployees()
        },
        methods: {
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