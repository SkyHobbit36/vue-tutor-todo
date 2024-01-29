<script setup lang="ts">
import type { Todo } from '@/types/Todo';
import Button from '@/UI/Button.vue';
import { inject } from 'vue';
import { Theme } from '@/types/Theme.enum';

const theme = inject<Theme>('theme');
const { id, todo } = defineProps<Todo>();
const completed = defineModel('completed');
</script>

<template>
    <div class="todo-item">
        <input type="checkbox" :class="[theme, 'checkbox']" v-model="completed">
        <div class="todo-text">{{ todo }}</div>
        <Button class="del-btn" @click="$emit('removeTodo', id)">X</Button>
    </div>
</template>

<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin: 10px;
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
.checkbox {
    width: 40px;
    height: 40px;
    cursor: pointer;
}
.dark {
    accent-color: white;
}
.light {
    accent-color: darkslategray;
}
</style>
