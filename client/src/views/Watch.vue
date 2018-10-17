<template>
    <div class="container">
        <floating-button class="exit" v-on:click="onReturn"/>
        <video id="my-video" data-dashjs-player autoplay controls src="https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd"></video>
        <div class="overlay">
            <chat-window :messages="messages" class="chatwindow"/>
            <bottom-bar v-on:exit="onReturn" v-on:send="onSend" :disabled="disabled" class="bottombar"/>
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
            disabled: false,
        }
    },
    methods: {
        onReturn: function () {
            SessionService.leave_session()
            this.$router.push('/')
        },
        onSend: function (message) {
            // Input validation
            if (message === '') {
                return
            }
            this.messages.push({
                name: '',
                content: message,
                self: true,
            })
            // Remove the element after 5 seconds
            setTimeout((message) => {
                this.messages.shift()
            }, 5000)
            MessageService.send(message)
        },
    },
    mounted: function () {
        SessionService.isuser(function (res) {
            if(res) {
                MessageService.receive(function (message) {
                    // Input validation
                    if (message === '') {
                        return
                    }
                    this.messages.push({
                        name: message.name,
                        content: message.content,
                        self: false,
                    })
                    // Remove the element after 5 seconds
                    setTimeout(() => {
                        this.messages.shift()
                    }, 5000)
                }.bind(this))
            } else {
                this.disabled = true;
            }
        }.bind(this))
    },
}
</script>

<style scoped>
.container {
  background-color: black;
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
