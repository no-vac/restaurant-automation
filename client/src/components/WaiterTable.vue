<template>
    <div id="employee-table">
        <p v-if="employees.length < 1" class="empty-table">
            No Waiters
        </p>

        <table class="table" v-else>
            <thead>
            <tr style="text-align: center;">
                <th>Waiter First Name</th>
                <th>Waiter Last Name</th>
                <th>Waiter Username</th>
                <th>Waiter Pin</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="employees in employees" :key="employees.id" style="text-align: center;">
                <td v-if="editing === employees.id">
                    <input type="text"  v-model="employees.FName" class="form-control" />
                </td>
                <td v-else>{{ employees.FName }}</td>

                <td v-if="editing === employees.id">
                    <input type="text"  v-model="employees.LName" class="form-control" />
                </td>
                <td v-else>{{ employees.LName }}</td>

                <td v-if="editing === employees.id">
                    <input type="text" v-model="employees.Username" class="form-control" />
                </td>
                <td v-else>{{ employees.Username }}</td>

                <td v-if="editing === employees.id">
                    <input type="text" v-model="employees.pin" class="form-control" />
                </td>
                <td v-else>{{ employees.pin }}</td>


                <td v-if="editing === employees.id">
                    <button @click="editEmployee(employees)" class="btn btn-outline-success">save</button>
                    <button class="btn btn-outline-danger" @click="cancelEdit(employees)">cancel</button>
                </td>
                <td v-else>
                    <button @click="editMode(employees.id)" class="btn btn-outline-primary">Edit</button>
                    <button @click="$emit('delete:employee', employees.id)" class="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'employee-table',
        props:{
            employees:Array,
        },
        data(){
            return {
                editing: null
            }
        },
        methods: {
            editMode(id){
                this.editing = id
            },
            cancelEdit(employee){
                Object.assign(employee, this.cachedEmployee);
                this.editing = null;
            },
            editEmployee(employee){
                if(
                    employee.FName === ''   ||
                    employee.LName === ''   ||
                    employee.Username ==='' ||
                    employee.pin === ''
                ) return;
                this.$emit('edit:employee', employee.id, employee);
                this.editing = null;
            },
        }
    }
</script>

<style scoped>
    button{
        margin: 0 0.5rem 0 0;
    }
</style>