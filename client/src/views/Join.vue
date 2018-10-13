<template>
    <div class="container">
        <div class="form">
            <logo/>
            <h1>Join a session</h1>
            <input-field v-model="sessionid" placeholder="Enter session ID"/>
            <input-field v-model="nickname" placeholder="Enter nickname"/>
            <div class="button-group">
                <button-field>Admin mode</button-field>
                <button-field>Submit</button-field>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import InputField from '@/components/InputField.vue'
import ButtonField from '@/components/ButtonField.vue'
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
        ButtonField,
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
    font-weight: 400;
}

.button-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
</style>
