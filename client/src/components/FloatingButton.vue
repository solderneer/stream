<template>
    <button type="button" v-on:click="$emit('click')">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'FloatingButton',
    props: {
        fontsize: String,
    }
}
</script>

<style scoped>
button {
    outline: none;
    border: none;

    background-color: rgba(0, 0, 0, 0.6);
    color: white;

    height: 100%;
    width: 100%;

    box-shadow: rgba(0, 0, 0, 0.05) 0 5px 20px;
    transition: box-shadow 0.5s;

    z-index: 1;
}

button:hover {
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 20px;
  transition: box-shadow 0.5s;
}

.text-sm {
    font-size: 20px;
}

.text-lg {
    font-size: 50px;
}

button:hover .text::before {
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
