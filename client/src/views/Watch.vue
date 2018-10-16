<template>
    <div class="container">
        <floating-button class="exit" v-on:click="onReturn"/>
        <video id="my-video" crossorigin="anonymous" autoplay>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
        </video>
        <div class="overlay">
            <chat-window :messages="messages" class="chatwindow"/>
            <bottom-bar v-on:exit="onReturn" v-on:send="onSend" class="bottombar"/>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import BottomBar from '@/components/BottomBar.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import FloatingButton from '@/components/FloatingButton.vue'

import SessionService from '@/services/SessionService.js'
import MessageService from '@/services/MessageService.js'

export default {
    name: 'Watch',
    components: {
        Logo,
        BottomBar,
        ChatWindow,
        FloatingButton,
    },
    data: function () {
        return {
            message: '',
            messages: [
            ],
        }
    },
    methods: {
        onReturn: function () {
            SessionService.leave_session()
            this.$router.push('/')
        },
        onSend: function (msg) {
            this.messages.push({
                name: '',
                content: msg,
                self: true,
            })
            let index = this.messages.length - 1
            // Remove the element after 5 seconds
            setTimeout(() => {
                this.messages.splice(index, 1)
            }, 5000)
            MessageService.send(msg)
        },
    },
    mounted: function () {
        MessageService.receive(function (message) {
            this.messages.push({
                name: message.name,
                content: message.content,
                self: false,
            })
            let index = this.messages.length - 1
            // Remove the element after 5 seconds
            setTimeout(() => {
                this.messages.splice(index, 1)
            }, 5000)
        }.bind(this))
    },
}
</script>

<style scoped>
.container {
  background-color: whitet;
  /* background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); */
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.overlay {
    position: absolute;
    bottom: 0px;
    width: 100vw;
}

.exit {
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: 20px;
}

#my-video {
    width: 100vw;
}
</style>
