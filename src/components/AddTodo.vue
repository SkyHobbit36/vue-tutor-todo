<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/UI/Button.vue';

const emit = defineEmits(['on-submit']);

const newTodo = ref('');
const addTodo = () => {
    if (!newTodo.value) return;
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
        <Button>Добавить</Button>
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
