<template>
    <select>
        <option v-for="element in elements" :key="element">{{ element }}</option>
    </select>
</template>

<script>
export default {
    name: 'DropDown',
    props: {
        elements: Array,
    },
}
</script>

<style scoped>

</style>
