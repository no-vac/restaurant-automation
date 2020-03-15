<template>
    <div id="employee-table">
        <p v-if="users.length < 1" class="empty-table">
            No Users
        </p>

        <table class="table" v-else>
            <thead>
            <tr style="text-align: center;">
                <th>Username</th>
                <th>Password (encrypted)</th>
                <th>Roles</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="users in users" :key="users.id" style="text-align: center;">
                <td v-if="editing === users.id">
                    <input type="text"  v-model="users.Username" class="form-control" />
                </td>
                <td v-else>{{ users.Username }}</td>

                <td v-if="editing === users.id">
                    <input type="text"  v-model="users.Password" class="form-control" />
                </td>
                <td v-else>{{ users.Password }}</td>

                <td v-if="editing === users.id">
                    <input type="text" v-model="users.Role" class="form-control" />
                </td>
                <td v-else>{{ users.Role }}</td>

                <td v-if="editing === users.id">
                    <input type="text" v-model="users.PhoneNumber" class="form-control" />
                </td>
                <td v-else>{{ users.PhoneNumber }}</td>

                <td v-if="editing === users.id">
                    <input type="text" v-model="users.Email" class="form-control" />
                </td>
                <td v-else>{{ users.Email }}</td>


                <td v-if="editing === users.id">
                    <button @click="editUser(users)" class="btn btn-outline-success">save</button>
                    <button class="btn btn-outline-danger" @click="cancelEdit(users)">cancel</button>
                </td>
                <td v-else>
                    <button @click="editMode(users.id)" class="btn btn-outline-primary">Edit</button>
                    <button @click="$emit('delete:user', users.id)" class="btn btn-outline-danger">Delete</button>
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
            users:Array,
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
            cancelEdit(user){
                Object.assign(user, this.cachedUser);
                this.editing = null;
            },
            editUser(user){
                if(
                    user.Username === ''   ||
                    user.Password === ''   ||
                    user.Role ==='' ||
                    user.PhoneNumber === '' ||
                    user.Email
                ) return;
                this.$emit('edit:user', user.id, user);
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
