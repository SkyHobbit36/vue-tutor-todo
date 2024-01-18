<script setup lang="ts">
import type { Todo } from '@/types/Todo';
import { ref } from 'vue';
import type { Ref } from 'vue';
import TodoItem from '@/components/TodoItem.vue';
import AddTodo from '@/components/AddTodo.vue';

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

const addNewTodo = (newTodo: Todo) => {
    todos.value.push(newTodo);
};

const removeTodo = (id: number) => {
    todos.value = todos.value.filter(t => t.id !== id);
};
</script>

<template>
    <div class="wrapper">
        <h3>Добавить задачу</h3>
        <AddTodo @on-submit="addNewTodo"/>

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
</style>
