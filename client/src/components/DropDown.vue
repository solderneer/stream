<template>
    <select>
        <option v-for="element in elements" :key="element.message">{{ element.message }}</option>
    </select>
</template>

<script>
export default {
    name: 'DropDown',
    data: function () {
        return {
            elements: [
                {message: 'hi'},
                {message: 'hello'},
            ],
            selected: 'Select a movie'
        }
    },
    props: {
        title: String,
    },
}
</script>

<style scoped>

</style>
