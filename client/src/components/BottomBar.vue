<template>
    <div class="bottombar">
        <logo size="sm" />
        <input-field class="chatbox" type="text" placeholder="Press enter to send" v-model="message" v-on:submit="onSend"/>
        <button-field class="button" v-on:click="onSend">Send</button-field>
        <button-field class="button" v-on:click="$emit('exit')">Exit</button-field>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import InputField from '@/components/InputField.vue'
import ButtonField from '@/components/ButtonField.vue'
export default {
    name: 'BottomBar',
    components: {
        InputField,
        ButtonField,
        Logo,
    },
    data: function () {
        return {
            message: '',
        }
    },
    methods: {
        onSend: function() {
            this.$emit('send', this.message)
            this.message = ''
        }
    }
}
</script>

<style scoped>
.bottombar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;

    width: 100%;
    background-image: linear-gradient(120deg, rgba(132, 250, 175, 0.8) 0%, rgba(143, 210, 244, 0.8) 100%);
    border-radius: 30px 30px 0px 0px;
}

.logo {
    margin: auto 10px;
}
.chatbox {
    margin: auto 30px;
    width: 100%;
}

.button {
    margin: auto 10px auto 3px;
    width: 100px;
}
</style>
