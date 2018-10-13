<template>
    <input :value="value" :placeholder="placeholder" v-on:input="$emit('input', $event.target.value)" type="text">
</template>

<script>
export default {
    name: 'InputField',
    props: {
        placeholder: String,
        value: String,
    }
}
</script>

<style scoped>
input[type=text] {
    outline: none;
    padding-left: 10px;
    
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    border-color: white;

    margin: 5px 0px;
    width: 100%;
    height: 40px;

    background-color: transparent;

    color: white;
    font-size: 13px;
}

::-webkit-input-placeholder {
    color: white;
}
</style>
