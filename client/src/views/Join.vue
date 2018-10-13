<template>
    <div class="container">
        <div class="form">
            <logo/>
            <h1>Join a session</h1>
            <input-field v-model="sessionid" placeholder="Enter session ID"/>
            <input-field v-model="nickname" placeholder="Enter your nickname here"/>
            <button type="button">Submit</button>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import InputField from '@/components/InputField.vue'
export default {
    name: 'Join',
    data: function () {
        return {
            sessionid: '',
            nickname: '',
        }
    },
    components: {
        Logo,
        InputField,
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    height: 100vh;
    width: 100vw;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background-color: transparent;
    width: 20%;
    padding: 20px;
}

h1 {
    color: white;
    margin: 10px;
    font-weight: 300;
}
</style>
