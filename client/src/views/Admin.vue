<template>
    <logon-page placeholder1="Enter secret" 
                placeholder2="Enter nickname" 
                button1="Client mode" 
                button2="Submit"
                header="Create a session"/>
</template>

<script>
import LogonPage from '@/components/LogonPage.vue'
export default {
    name: 'Admin',
    components: {
        LogonPage,
    }
}
</script>

<style>

</style>