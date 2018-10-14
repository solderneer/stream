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
    },
}
</script>

<style scoped>
.chatbox {
    list-style: none;
    color: black;
    background-color: transparent;
    width: 100%;

    padding: 0px;
}

.messagebox {
    background: white;
    padding: 10px;
    max-width: 30%;
    border-radius: 20px;
    margin: 10px 10px;
}

.self {
    margin-left: auto;
}

.name {
    font-family: 'Raleway';
    font-weight: 600;
}
</style>
