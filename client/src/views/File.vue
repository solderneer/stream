<template>
<div class="container">
    <div class="form">
        <logo size="lg"/>
        <h1>Select movie</h1>
        <drop-down/>
        <buttom-field>Create</buttom-field>
    </div>
</div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import DropDown from '@/components/DropDown.vue'
import ButtomField from '@/components/ButtonField.vue'

export default {
    name: 'File',
    components: {
        DropDown,
        Logo,
        ButtomField,
    }
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

h1 {
  color: white;
  margin: 10px;
  font-weight: 400;
}

</style>
