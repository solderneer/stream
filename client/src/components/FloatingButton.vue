<template>
    <button type="button" v-on:click="$emit('click')">
        <span class="text fa fa-times"></span>
    </button>
</template>

<script>
export default {
    name: 'FloatingButton'
}
</script>

<style scoped>
button {
    outline: none;
    border: none;

    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;

    height: 30px;
    width: 30px;

    box-shadow: rgba(0, 0, 0, 0.05) 0 5px 20px;
    transition: box-shadow 0.5s;

    z-index: 1;
}

button:hover {
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 20px;
  transition: box-shadow 0.5s;
}

.text {
  font-size: 20px;
}

button:hover .text::before {
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
