<template>
    <logon-page placeholder1="Enter session ID" 
                placeholder2="Enter nickname" 
                button1="Admin mode" 
                button2="Submit"
                header="Join a session"/>
</template>

<script>
import LogonPage from '@/components/LogonPage.vue'
export default {
    name: 'Join',
    components: {
        LogonPage,
    }
}
</script>

<style>

</style>

