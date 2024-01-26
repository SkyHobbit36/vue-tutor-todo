<script setup lang="ts">
import type { Todo, TodosResponse } from '@/types/Todo';
import type { Ref } from 'vue';
import { computed, provide, ref, watch } from 'vue';
import TodoItem from '@/components/TodoItem.vue';
import AddTodo from '@/components/AddTodo.vue';
import Button from '@/UI/Button.vue';
import { Theme } from '@/types/Theme.enum';

const todos: Ref<Todo[]> = ref([
    {
        id: 1,
        todo: 'Сделать вывод списка задач',
        completed: true,
    },
    {
        id: 2,
        todo: 'Добавление задачи',
        completed: true,
    },
    {
        id: 3,
        todo: 'Удаление задачи',
        completed: true,
    },
    {
        id: 4,
        todo: 'Добавление через модалку',
        completed: false,
    },
    {
        id: 5,
        todo: 'загрузка списка с jsonplaceholder',
        completed: false,
    },
    {
        id: 6,
        todo: 'Пагинация, роутинг',
        completed: false,
    }
]);

const theme: Ref<Theme> = ref(Theme.LIGHT);
provide('theme', theme);
const toggleTheme = () => {
    if(theme.value === Theme.LIGHT) {
        theme.value = Theme.DARK;
    } else {
        theme.value = Theme.LIGHT;
    }
}

const showCompleted: Ref<boolean> = ref(true);
const filteredTodos = computed(() => showCompleted.value ? todos.value : todos.value.filter(t => !t.completed));

const addNewTodo = (newTodo: Todo) => {
    todos.value.push(newTodo);
};
const removeTodo = (id: number) => {
    todos.value = todos.value.filter(t => t.id !== id);
};

const skip: Ref<number> = ref(-10);
watch(skip, () => {
    fetch('https://dummyjson.com/todos?limit=10&skip=' + skip.value)
        .then(res => res.json())
        .then((data: TodosResponse) => {
            todos.value = data.todos;
        });
})
</script>

<template>
    <div :class="[theme, 'wrapper']">
        <div class="content">
            <Button class="theme-btn" @click="toggleTheme">{{ theme === Theme.LIGHT ? '☽' : '☼' }}</Button>

            <h3>Добавить задачу</h3>
            <AddTodo @on-submit="addNewTodo"/>

            <h3>Список задач</h3>
            <Button class="show-completed-btn"
                    @click="showCompleted = !showCompleted"
            >{{ showCompleted ? 'Скрыть завешенные' : 'Показать все'}}</Button>
            <TodoItem
                v-for="todo in filteredTodos"
                :key="todo.id"
                :id="todo.id"
                :todo="todo.todo"
                v-model:completed="todo.completed"
                @removeTodo="removeTodo"
            />

            <Button @click="skip += 10">Загрузить еще</Button>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
    min-height: 100%;
}
.content {
    padding-top: 10px;
    width: 400px;
    margin: 0 auto;
}
.show-completed-btn {
    width: 200px;
}
.dark {
    color: white;
    background-color: darkgrey;
}
.light {
    color: black;
    background-color: white;
}
.theme-btn {
    width: 50px;
}
</style>
