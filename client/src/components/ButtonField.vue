<template>
    <button type="button" v-on:click="$emit('click')">
        <span class="text"><slot /></span>
    </button>
</template>

<script>
export default {
  name: "ButtonField"
};
</script>

<style scoped>
button {
  outline: none;
  border: none;

  border-radius: 25px;
  background-color: white;

  height: 40px;
  width: 90%;

  box-shadow: rgba(0, 0, 0, 0.05) 0 5px 20px;
  transition: box-shadow 0.5s;
}

button:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 20px;
  transition: box-shadow 0.5s;
}

.text {
  text-transform: uppercase;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Raleway";
  font-weight: 400;
  font-size: 15px;
  font-weight: 400;
}
</style>
