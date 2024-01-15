<script setup lang="ts">

import type { TodoItem } from '@/types/Todo';

const todos: TodoItem[] = [
    {
        id: 1,
        value: 'Сделать вывод списка задач',
        checked: true,
    },
    {
        id: 2,
        value: 'Добавление задачи',
        checked: false,
    },
    {
        id: 3,
        value: 'Удаление задачи',
        checked: false,
    }
]

</script>

<template>
    <div class="wrapper">
        <h1>Список задач</h1>
        <div class="todos" v-for="todo in todos">
            <div>{{ todo.value }}</div>
            <div>{{ todo.checked }}</div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 300px;
}
.todos {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin: 10px;
}
</style>
