<script setup lang="ts">

import type { Todo } from '@/types/Todo';
import { ref } from 'vue';
import type { Ref } from 'vue';
import TodoItem from '@/components/TodoItem.vue';


const todos: Ref<Todo[]> = ref([
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
        <form @submit.prevent="addTodo" class="add-todo">
            <input type="text" v-model="newTodo">
            <button>Добавить</button>
        </form>

        <h3>Список задач</h3>
        <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :id="todo.id"
            :value="todo.value"
            v-model:checked="todo.checked"
            @removeTodo="removeTodo"
        />
    </div>
</template>

<style scoped>
.wrapper {
    width: 400px;
}

.add-todo {
    display: flex;
}
.add-todo input{
    width: 100%;
}
</style>
