<template>
<div class="container">
    <div class="form">
        <logo size="lg"/>
        <select v-model="selected">
            <option disabled value="">Select a movie</option>
            <option v-for="element in elements" :key="element">{{ element }}</option>
        </select>
        <buttom-field v-on:click="onCreate">Create</buttom-field>
    </div>
</div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import DropDown from '@/components/DropDown.vue'
import ButtomField from '@/components/ButtonField.vue'

import FileService from '@/services/FileService.js'

export default {
    name: 'File',
    components: {
        DropDown,
        Logo,
        ButtomField,
    },
    data: function () {
        return {
            elements: [],
            selected: '',
        }
    },
    methods: {
        onCreate: function () {
            this.$router.push('/watch/admin/' + this.selected)
        }
    },
    mounted: async function () {
        this.elements = await FileService.getfilelist()
    },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 100vh;
  width: 100vw;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  padding: 20px;
}
</style>
