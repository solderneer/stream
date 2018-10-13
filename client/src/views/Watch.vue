<template>
    <div class="container">
        <video id="my-video" controls="true" width="480" height="270" crossorigin="anonymous">
            <source src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm">
            <source src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 100vh;
  width: 100vw;
}
</style>
