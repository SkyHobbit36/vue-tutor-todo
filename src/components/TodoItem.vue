<script setup lang="ts">
import type { Todo } from '@/types/Todo';
import Button from '@/UI/Button.vue';
import { inject, ref } from 'vue';
import { Theme } from '@/types/Theme.enum';

const theme = inject<Theme>('theme');
const { id, todo } = defineProps<Todo>();
const completed = defineModel('completed');
const deleted = ref(true);

</script>

<template>
    <transition @leave="$emit('removeTodo', id)">
        <div v-if="deleted" class="todo-item">
            <input type="checkbox" :class="[theme, 'checkbox']" v-model="completed">
            <div class="todo-text">{{ todo }}</div>
            <Button class="del-btn" @click="deleted =!deleted">X</Button>
        </div>
    </transition>
</template>

<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 10px;
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

.v-leave-from {
    height: 50px;
}
.v-leave-to {
    opacity: 0;
    transform: translateX(-500px);
    height: 0px;
    padding: 0px;
}
.v-leave-active {
    transition: all 0.3s ease;
}
</style>
