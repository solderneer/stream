<template>
    <div class="container">
        <video id="my-video" crossorigin="anonymous" autoplay>
            <source src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm">
            <source src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4">
        </video>
        <div class="overlay">
            <chat-window :messages="messages" class="chatwindow"/>
            <bottom-bar v-on:exit="onReturn" v-on:send="onSend" class="bottombar"/>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import ButtonField from '@/components/ButtonField.vue'
import BottomBar from '@/components/BottomBar.vue'
import ChatWindow from '@/components/ChatWindow.vue'

import MessageService from '@/services/MessageService.js'

export default {
    name: 'Watch',
    components: {
        ButtonField,
        Logo,
        BottomBar,
        ChatWindow,
    },
    data: function () {
        return {
            message: '',
            messages: [
                {
                    name: 'Sudharshan',
                    content: 'Hello',
                    self: false,
                },
                {
                    name: 'Isaac Tay',
                    content: 'THIS MOVIE SUCKS',
                    self: false,
                },
            ],
        }
    },
    methods: {
        onReturn: function () {
            this.$router.push('/')
        },
        onSend: function (msg) {
            this.messages.push({
                name: '',
                content: msg,
                self: true,
            })
            // MessageService.send(msg)
        }
    }
}
</script>

<style scoped>
.container {
  position: relative;
  background-color: black;
  /* background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); */
  height: 100vh;
  width: 100vw;
}

.overlay {
    position: absolute;
    bottom: 0px;
    width: 100vw;
}

#my-video {
    width: 100vw;
    max-height: 100vh;
}
</style>
