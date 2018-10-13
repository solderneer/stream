<template>
    <logon-page :placeholder1="input"
                placeholder2="Enter nickname" 
                :button1="button1" 
                button2="Submit"
                :header="header"
                v-on:click="onClick"/>
</template>

<script>
import LogonPage from '@/components/LogonPage.vue'
export default {
    name: 'Join',
    data: function () {
        return {
            admin: false,
            header: 'Join a session',
            input: 'Enter session ID',
        }
    },
    components: {
        LogonPage,
    },
    methods: {
        onClick: function (button) {
            if (button === 1) {
                this.admin = !this.admin

                if(this.admin) {
                    this.header = 'Create a session'
                    this.input = 'Enter secret'
                } else {
                    this.header = 'Join a session'
                    this.input = 'Enter session ID'
                }
            } else if (button === 2) {
                // This is the submit logic
            }
        }
    },
    computed: {
        button1: function ()  {
            return (this.admin) ? 'Admin mode' : 'Client mode';
        }
    }
}
</script>

<style>

</style>

