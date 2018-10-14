<template>
    <div class="container">
        <video id="my-video" crossorigin="anonymous" autoplay>
            <source src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm">
            <source src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4">
        </video>
        <bottom-bar class="bottombar"/>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import ButtonField from '@/components/ButtonField.vue'
import BottomBar from '@/components/BottomBar.vue'
export default {
    name: 'Watch',
    components: {
        ButtonField,
        Logo,
        BottomBar,
    },
    methods: {
        onReturn: function () {
            this.$router.push('/')
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

.bottombar {
    position: absolute;
    bottom: 0px;
}
#my-video {
    width: 100vw;
    max-height: 100vh;
}
</style>
