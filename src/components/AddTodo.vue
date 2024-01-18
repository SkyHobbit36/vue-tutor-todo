<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['on-submit']);

const newTodo = ref('');
const addTodo = () => {
    const newTodoModel = {
        id: Date.now(),
        value: newTodo.value,
        checked: false,
    };

    emit('on-submit', newTodoModel);

    newTodo.value = '';
}
</script>

<template>
    <form @submit.prevent="addTodo" class="add-todo">
        <input type="text" v-model="newTodo">
        <button>Добавить</button>
    </form>
</template>

<style scoped>
.add-todo {
    display: flex;
}
.add-todo input{
    width: 100%;
}
</style>
