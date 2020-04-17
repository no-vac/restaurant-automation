<template>
    <div id="addingUser">
        <h1 style="margin-top: .5em; margin-bottom: .5em;">Add New User: </h1>
        <user-form
                @add:user="addUser"
        />
        <user-table
                :users="users"
                @delete:user="deleteUser"
                @edit:user="editUser"
        />
    </div>
</template>

<script>
    import UserTable from './UserTables';
    import UserForm from "./UserForm";

    export default {
        name: 'Index',
        components: {
            UserForm,
            UserTable
        },
        data() {
            return {
                users: []
            }
        },
        mounted() {
            this.getUser()
        },
        methods: {
            async getUser() {
                try {
                    const response = await fetch('http://127.0.0.1:5000/api/u');
                    const data = await response.json();
                    this.users = data
                } catch (error) {
                    console.log(error)
                }
            },
            async addUser(user) {
                try {
                    const response = await fetch('http://127.0.0.1:5000/api/u', {
                        method: 'POST',
                        body: JSON.stringify(user),
                        headers: {'Content-type': 'application/json; chartset=UTF-8'}
                    });
                    const data = await response.json();
                    this.users = [...this.users, data]
                } catch (error) {
                    console.log(error)
                }
            },
            async editUser(id, updatedUser) {
                try {
                    const response = await fetch(`http://127.0.0.1:5000/api/u/${id}`, {
                        method: 'PUT',
                        body: JSON.stringify(updatedUser),
                        headers: {'Content-type': 'application/json; chartset=UTF-8'}
                    });
                    const data = await response.json();
                    this.users = this.users.map(user => (user.id === id ? data : user))
                } catch (error) {
                    console.log(error)
                }
            },
            async deleteUser(id) {
                try {
                    await fetch(`http://127.0.0.1:5000/api/u/${id}`, {
                        method: 'DELETE'
                    });
                    this.users = this.users.filter(user => user.id !== id);
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>
