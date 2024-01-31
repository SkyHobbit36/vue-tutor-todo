<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/UI/Button.vue';
import type { Todo } from '@/types/Todo';

const emit = defineEmits(['on-submit']);

const newTodo = ref('');
const addTodo = () => {
    if (!newTodo.value) return;
    const newTodoModel: Todo = {
        id: Date.now(),
        todo: newTodo.value,
        completed: false,
    };

    emit('on-submit', newTodoModel);

    newTodo.value = '';
}
</script>

<template>
    <form @submit.prevent="addTodo" class="add-todo">
        <input type="text" v-model="newTodo">
        <Button type="submit">Добавить</Button>
    </form>
</template>

<style scoped>
.add-todo {
    display: flex;
    gap: 10px;
}
.add-todo input{
    width: 100%;
    border-radius: 10px;
    border: 1px solid grey;
}
</style>
