<template>
    <input :value="value" :placeholder="placeholder" v-on:input="$emit('input', $event.target.value)" :type="type">
</template>

<script>
export default {
  name: "InputField",
  props: {
    placeholder: String,
    value: String,
    type: String,
  }
};
</script>

<style scoped>
input {
  outline: none;
  padding-left: 10px;

  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: white;

  width: 100%;
  height: 40px;

  background-color: transparent;

  color: white;
  font-size: 14px;

  transition: border-width 0.2s;
}

input:focus {
  transition: border-width 0.2s;
  border-width: 3px;
}

::-webkit-input-placeholder {
  color: white;
}
</style>
