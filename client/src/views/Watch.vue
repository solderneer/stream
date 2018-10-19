<template>
    <div id="container">
        <span class="exit">
            <floating-button v-on:click="onReturn">
                <span class="text text-sm fa fa-times"></span>
            </floating-button>
        </span>
        <span class="play">
            <floating-button v-on:click="onToggle">
                <span class="text text-lg fa" v-bind:class="{ 'fa-play': play, 'fa-pause': !play }"></span>
            </floating-button>
        </span>
        <video id="my-video"></video> 
        <div class="overlay">
            <chat-window :messages="messages" class="chatwindow"/>
            <progress-bar :max="max.toString()" :value="value.toString()" v-on:drag="onDrag" v-on:jump="onJump"></progress-bar>
            <bottom-bar v-on:exit="onReturn" v-on:send="onSend" :disabled="disabled" class="bottombar"/>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import BottomBar from '@/components/BottomBar.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import FloatingButton from '@/components/FloatingButton.vue'
import ProgressBar from '@/components/ProgressBar.vue'

import SessionService from '@/services/SessionService.js'
import MessageService from '@/services/MessageService.js'
import SyncService from '@/services/SyncService.js'

export default {
    name: 'Watch',
    components: {
        Logo,
        BottomBar,
        ChatWindow,
        FloatingButton,
        ProgressBar,
    },
    data: function () {
        return {
            message: '',
            messages: [
            ],
            disabled: false,
            value: 0,
            max: 100,
            video: null,
            url: 'http://localhost:1000/Deadpool/Deadpool.mpd',
            play: false,
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
            setTimeout(() => {
                this.messages.shift()
            }, 5000)
            MessageService.send(message)
        },
        onDrag: function (position) {
            this.value = position * this.max
            this.video.currentTime = position * this.max
        },
        onJump: function (position) {
            this.video.currentTime = position * this.max
        },
        onToggle: function () {
            if(this.play) {
                this.video.play()
                // Video sync
                if(this.$route.params.state === 'admin') {
                    SyncService.playall()
                }
            } else {
                this.video.pause()
                // Video sync
                if(this.$route.params.state === 'admin') {
                    SyncService.pauseall()
                }
            }
            this.play = !this.play
        }
    },
    mounted: function () {
        // Setting up events for message handling
        SessionService.isuser(function (res) {
            if(res) {
                // Message related callbacks
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

                if(this.$route.params.state === 'client') {
                    // Video stream related client callbacks
                    SyncService.gettime(function (time) {
                        if(abs(time - this.video.currentTime) > 1) {
                            this.video.currentTime = time
                        }
                    }.bind(this))

                    SyncService.onplay(function () {
                        this.video.play()
                        this.play = false // Show pause button
                    }.bind(this))

                    SyncService.onpause(function () {
                        this.video.pause()
                        this.play = true // Show play button
                    }.bind(this))
                }
            } else {
                this.disabled = true;
            }
        }.bind(this))

        // Setting up video element
        let dash = dashjs.MediaPlayer().create()
        this.video = document.querySelector('#my-video')
        dash.initialize(this.video, this.url, true)

        // Progress bar support
        this.video.addEventListener('durationchange', function() {
            this.max = this.video.duration
            this.video.addEventListener('timeupdate', function() {
                this.value = this.video.currentTime
                
                // Video sync
                if(this.$route.params.state === 'admin') {
                    SyncService.sendtime(this.video.currentTime)
                }
            }.bind(this))
        }.bind(this));
    },
}
</script>

<style scoped>
#container {
  background-color: black;
  /* background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); */
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay {
    position: absolute;
    bottom: 0px;
    width: 100vw;
}

.exit {
    align-self: flex-start;
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: 20px;

    /* Make it circular */
    width: 30px;
    height: 30px;
    border-radius: 15px;
    overflow: hidden;
}

.play {
    position: absolute;
    margin: auto 0px;

    /* Make it circular */
    width: 100px;
    height: 100px;
    border-radius: 50px;
    overflow: hidden;

    z-index: 1;
    display: block;
}

#my-video {
    width: 100vw;
}
</style>
