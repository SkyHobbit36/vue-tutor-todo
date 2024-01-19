<script setup lang="ts">
import type { Todo } from '@/types/Todo';
import { computed, ref } from 'vue';
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
        checked: true,
    },
    {
        id: 4,
        value: 'Добавление через модалку',
        checked: false,
    },
    {
        id: 5,
        value: 'загрузка списка с jsonplaceholder',
        checked: false,
    },
    {
        id: 6,
        value: 'Пагинация, роутинг',
        checked: false,
    }
]);

const showCompleted: Ref<boolean> = ref(true);
const filteredTodos = computed(() => showCompleted.value ? todos.value : todos.value.filter(t => !t.checked));

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
        <button class="show-completed-btn"
            @click="showCompleted = !showCompleted"
        >{{ showCompleted ? 'Скрыть завешенные' : 'Показать все'}}</button>
        <TodoItem
            v-for="todo in filteredTodos"
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
.show-completed-btn {
    width: 200px;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
}
</style>
