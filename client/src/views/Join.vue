<template>
    <div class="container">
        <div class="form">
            <logo size="lg"/>
            <input-field class="input" v-model="input1" :placeholder="placeholder" :type="type"/>
            <input-field class="input" v-model="input2" placeholder="Enter nickname"/>
            <span class="error"> {{ error }}</span>
            <div class="button-group">
                <button-field class="button" v-on:click="onClick(1)">{{ button }}</button-field>
                <button-field class="button" v-on:click="onClick(2)">Create</button-field>
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
      type: 'text',
      error: '',
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
          this.type = 'password'
        } else {
          this.header = 'Join a session'
          this.placeholder = 'Enter session ID'
          this.type = 'text'
        }
      } else if (button === 2) {
        // This is the submit logic
        if (this.admin) {
          SessionService.create_session(this.input1, this.input2, function (res, err) {
            if(res === 0) {
              this.$router.push('/files')
            } else {
              this.error = err
            }
          }.bind(this))
        }
        else {
          SessionService.join_session(this.input1, this.input2, function (res, err) {
            if(res === 0){
              this.$router.push('/watch')
            } else {
              this.error = err
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

<style scoped>
.container {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  align-items: center;
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
.button {
  margin: 10px;
}
.input {
  margin: 5px 0px;
}
.error {
  color: white;
  font-size: 15px;
  margin: 5px;
}
</style>

