<template>
    <div class="chatinput">
        <input placeholder="Write message here..." 
        type="text" 
        v-on:input="$emit('input', $event.target.value)"
        :value="value"
        v-on:keyup.enter="$emit('submit')"/>
        <span class="fa fa-smile-o"></span>
        <span v-on:click="$emit('submit')" class="fa fa-paper-plane-o"></span>
    </div>
</template>

<script>
export default {
  name: "ChatBox",
  props: {
    value: String
  }
};
</script>

<style scoped>
.chatinput {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;

  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: white;

  background-color: transparent;

  width: 100%;
  height: 40px;

  color: white;
  font-size: 14px;
}
.chatinput input {
  outline: none;
  border: none;

  width: 100%;
  text-indent: 15px;

  background-color: transparent;

  color: white;
  font-size: 14px;
}

.chatinput .fa-smile-o {
  margin: auto 5px auto 5px;
  font-size: 20px;
}

.chatinput .fa-paper-plane-o {
  margin: auto 15px auto 10px;
  font-size: 20px;
}

.chatinput .fa:hover {
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

::-webkit-input-placeholder {
  color: white;
}
</style>
