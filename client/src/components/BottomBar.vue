<template>
    <div class="bottombar">
        <logo size="xs" />
        <chat-box v-model="message" v-on:submit="onSend" class="chatbox" :disabled="disabled"/>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import InputField from '@/components/InputField.vue'
import ChatBox from '@/components/ChatBox.vue'
import ButtonField from '@/components/ButtonField.vue'
export default {
    name: 'BottomBar',
    components: {
        InputField,
        ButtonField,
        Logo,
        ChatBox,
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
    },
    props: {
        disabled: Boolean,
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
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%);
    /* background-color: rgba(0, 0, 0, 0.6);*/
}

.logo {
    margin: auto 10px;
}
.chatbox {
    width: 100%;
    margin: 13px 5px 10px 5px;
}
</style>
