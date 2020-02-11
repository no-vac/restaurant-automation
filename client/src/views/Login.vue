<template>
    <div id="LoginForm">
        <h1>Login</h1>
        <input type="number" name="pin"  v-model="waiter.pin" placeholder="pin" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
 export default {
    name: 'log-in form',
     data(){
        return{
            submitting: false,
            success: false,
            error: false,
            waiter:{
                pin: ''
            }
        }
     },
     methods: {
        handleSubmit(){
            this.submitting = true;
            this.clearStatus();

            if(this.invalidPin){
                this.error = true;
                return;
            }

        },
         clearStatus(){
            this.error = false;
            this.success = false;
         },
         login(){
            if(this.waiter.pin != ''){
                if(this.waiter.pin == this.$parent.mockAccount)
            }
         }
     },
     computed:{
        invalidPin(){
            return this.waiter.pin === ''
        }
     }
 }
</script>

<style scoped>

</style>