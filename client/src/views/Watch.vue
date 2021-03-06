<template>
    <div id="container">
        <span class="exit">
            <floating-button v-on:click="onReturn">
                <span class="text text-sm fa fa-times"></span>
            </floating-button>
        </span>
        <span class="play" v-bind:class="{ 'hidden': !admin }">
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
import Logo from "@/components/Logo.vue";
import BottomBar from "@/components/BottomBar.vue";
import ChatWindow from "@/components/ChatWindow.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import ProgressBar from "@/components/ProgressBar.vue";

import SessionService from "@/services/SessionService.js";
import MessageService from "@/services/MessageService.js";
import SyncService from "@/services/SyncService.js";

export default {
  name: "Watch",
  components: {
    Logo,
    BottomBar,
    ChatWindow,
    FloatingButton,
    ProgressBar
  },
  data: function() {
    return {
      message: "",
      messages: [],
      disabled: false,
      value: 0,
      max: 100,
      video: null,
      url: "",
      play: true,
      admin: false,
    };
  },
  methods: {
    onReturn: function() {
      SessionService.leave_session();
      this.$router.push("/");
    },
    onSend: function(message) {
      // Input validation
      if (message === "") {
        return;
      }
      this.messages.push({
        name: "",
        content: message,
        self: true
      });
      // Remove the element after 5 seconds
      setTimeout(() => {
        this.messages.shift();
      }, 5000);
      MessageService.send(message);
    },
    onDrag: function(position) {
      if(this.admin) {
        this.value = position * this.max;
        this.video.currentTime = position * this.max;
      }
    },
    onJump: function(position) {
      if(this.admin) {
        this.video.currentTime = position * this.max;
      }
    },
    onToggle: function() {
      if (this.play) {
        this.video.play();
        // Video sync
        if (this.admin) {
          SyncService.playall();
        }
      } else {
        this.video.pause();
        // Video sync
        if (this.admin) {
          SyncService.pauseall();
        }
      }
      this.play = !this.play;
    }
  },
  mounted: function() {
    // Setting up data attribute
    this.admin = (this.$route.params.state === 'admin')
    // Setting up events for message handling
    SessionService.isuser(
      function(res) {
        if (res) {
          // Message related callbacks for both admin and client
          MessageService.receive(
            function(message) {
              // Input validation
              if (message === "") {
                return;
              }
              this.messages.push({
                name: message.name,
                content: message.content,
                self: false
              });
              // Remove the element after 5 seconds
              setTimeout(() => {
                this.messages.shift();
              }, 5000);
            }.bind(this)
          );

          SessionService.getmovie(
            function(movie) {
              // Build the url
              this.url =
                "https://movies.solderneer.me/" + movie + "/" + movie + ".mpd";

              // Setting up video element for both admin and client (and suppress warning)
              // eslint-disable-next-line
              let dash = dashjs.MediaPlayer().create();
              this.video = document.querySelector("#my-video");
              dash.initialize(this.video, this.url, true);

              // Progress bar support with time sync for admin
              this.video.addEventListener(
                "durationchange",
                function() {
                  this.max = this.video.duration;
                  this.video.pause();
                  this.video.addEventListener(
                    "timeupdate",
                    function() {
                      this.value = this.video.currentTime;
                      // Video sync
                      if (this.admin) {
                        SyncService.sendtime(this.video.currentTime);
                      }
                    }.bind(this)
                  );
                }.bind(this)
              );

              if (!this.admin) {
                // Video stream related client callbacks
                SyncService.gettime(
                  function(time) {
                    if (Math.abs(time - this.video.currentTime) > 2) {
                      this.video.currentTime = time;
                    }
                  }.bind(this)
                );

                SyncService.onplay(
                  function() {
                    this.video.play();
                    this.play = false; // Show pause button
                  }.bind(this)
                );

                SyncService.onpause(
                  function() {
                    this.video.pause();
                    this.play = true; // Show play button
                  }.bind(this)
                );
              }
            }.bind(this)
          );
        } else {
          this.disabled = true;
        }
      }.bind(this)
    );
  }
};
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

.hidden {
  display: none;
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
