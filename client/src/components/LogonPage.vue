<template>
    <div class="container">
        <div class="form">
            <logo/>
            <h1>{{ header }}</h1>
            <input-field v-model="input1" :placeholder="placeholder1"/>
            <input-field v-model="input2" :placeholder="placeholder2"/>
            <div class="button-group">
                <button-field>{{ button1 }}</button-field>
                <button-field>{{ button2 }}</button-field>
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
            input1: '',
            input2: '',
        }
    },
    components: {
        Logo,
        InputField,
        ButtonField,
    },
    props: {
        placeholder1: String,
        placeholder2: String,
        button1: String,
        button2: String,
        header: String,
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
