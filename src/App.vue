<script setup lang="ts">

import type { TodoItem } from '@/types/Todo';
import { ref } from 'vue';
import type { Ref } from 'vue';

const todos: Ref<TodoItem[]> = ref([
    {
        id: 1,
        value: 'Сделать вывод списка задач',
        checked: true,
    },
    {
        id: 2,
        value: 'Добавление задачи',
        checked: true,
    },
    {
        id: 3,
        value: 'Удаление задачи',
        checked: false,
    }
]);

const newTodo = ref('');

const addTodo = () => {
    todos.value.push({
        id: todos.value[todos.value.length - 1].id + 1,
        value: newTodo.value,
        checked: false,
    });

    newTodo.value = '';
}

const removeTodo = (id: number) => {
    todos.value = todos.value.filter(t => t.id !== id);
}

</script>

<template>
    <div class="wrapper">
        <h3>Добавить задачу</h3>
        <form @submit.prevent="addTodo">
            <input class="add-todo" type="text" v-model="newTodo">
        </form>

        <h3>Список задач</h3>
        <div class="todos" v-for="todo in todos">
            <input type="checkbox" v-model="todo.checked">
            <div class="todo-text">{{ todo.value }}</div>
            <button class="del-btn" @click="removeTodo(todo.id)">X</button>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 400px;
}
.add-todo {
    width: 100%;
}
.todos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin: 10px;
}
input[type=checkbox] {
    width: 20px;
    height: 20px;
    cursor: pointer;
}
.todo-text {
    width: 350px;
}
.del-btn {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>
