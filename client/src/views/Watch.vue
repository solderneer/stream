<template>
    <div class="container">
        <video id="my-video" width="480" height="270" crossorigin="anonymous" autoplay>
            <source src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm">
            <source src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4">
        </video>
        <button-field v-on:click="onReturn"> Return </button-field>
    </div>
</template>

<script>
import ButtonField from '@/components/ButtonField.vue'
export default {
    name: 'Watch',
    components: {
        ButtonField,
    },
    methods: {
        onReturn: function () {
            this.$router.push('/')
        }
    }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 100vh;
  width: 100vw;
}
</style>
