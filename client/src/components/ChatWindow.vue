<template>
    <ul class="chatbox">
        <li v-for="message in messages" :key="message.id">
            <div class="messagebox" :class="{self: message.self}">
                <div class="name">{{ message.name }}</div>
                <div class="content">{{ message.content }}</div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ChatWindows',
    props: {
        messages: Array,
    }
}
</script>

<style scoped>
li {
    list-style: none;
    display: flex;
}
.chatbox {
    list-style: none;
    color: black;
    background-color: transparent;
    width: 100%;

    padding: 0px;
}

.messagebox {
    display: inline-block;
    word-wrap: break-word;
    background-color: rgb(231, 231, 231) ; 
    padding: 10px;

    min-width: 5%;
    max-width: 40%;

    border-radius: 20px;
    margin: 5px 10px;
    margin-left: auto;
    color: black;
}

.self {
    background-color: #4bc3ff;
    color: white;
}

.name {
    font-family: 'Raleway';
    font-weight: 600;
}
</style>
