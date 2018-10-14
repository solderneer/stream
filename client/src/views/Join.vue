<template>
    <div class="container">
        <div class="form">
            <logo size="lg"/>
            <h1>{{ header }}</h1>
            <input-field v-model="input1" :placeholder="placeholder"/>
            <input-field v-model="input2" placeholder="Enter nickname"/>
            <div class="button-group">
                <button-field v-on:click="onClick(1)">{{ button }}</button-field>
                <button-field v-on:click="onClick(2)">Create</button-field>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import InputField from "@/components/InputField.vue";
import ButtonField from "@/components/ButtonField.vue";

import SessionService from '@/services/SessionService.js'

export default {
  name: 'Join',
  data: function() {
    return {
      admin: false,
      header: 'Join a session',
      placeholder: 'Enter session ID',
      input1: '',
      input2: '',
    };
  },
  components: {
    Logo,
    InputField,
    ButtonField,
  },
  methods: {
    onClick: function(button) {
      if (button === 1) {
        this.admin = !this.admin;

        if (this.admin) {
          this.header = 'Create a session'
          this.placeholder = 'Enter secret'
        } else {
          this.header = 'Join a session'
          this.placeholder = 'Enter session ID'
        }
      } else if (button === 2) {
        // This is the submit logic
        if (this.admin)
          this.$router.push('/files')
        else {
          SessionService.join_client(this.input1, this.input2, function (res) {
            if(res === this.input1){
              this.$router.push('/watch')
            }
          }.bind(this))
        }
      }
    }
  },
  computed: {
    button: function() {
      return this.admin ? 'Client mode' : 'Admin mode';
    }
  }
};
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
.button-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
</style>

