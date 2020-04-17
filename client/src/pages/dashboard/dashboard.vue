<template>
    <div id="dashboard">
        <b-row>
            <b-col cols="4">
                <b-card border-variant="danger" img-src="https://cdn.dribbble.com/users/622327/screenshots/2590764/dr1.png" title="Table 6" style="margin: 1em;">
                    <b-row>
                        <b-col cols="6" style="margin: 1em;">
                            <strong>Status: </strong>Occupied
                        </b-col>
                        <b-col cols="6" class="justify-content-center align-items-center">
                            <strong>Order Total: </strong>$112.45
                        </b-col>
                        <b-col cols="6" class="justify-content-center align-items-center;" style="text-align: center;">
                            <b-button variant="outline-danger">Clear Table</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
    }
</script>

<style scoped>

</style>
