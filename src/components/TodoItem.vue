<script setup lang="ts">
import type { Todo } from '@/types/Todo';

const props = defineProps<{
    todo: Todo,
}>();
const { id, checked, value } = props.todo;

</script>

<template>
    <div class="todo-item">
        <input type="checkbox" :checked="checked" @change="$emit('onChecked', id)">
        <div class="todo-text">{{ value }}</div>
        <button class="del-btn" @click="$emit('removeTodo', id)">X</button>
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
input[type=checkbox] {
    width: 20px;
    height: 20px;
    cursor: pointer;
}
</style>
