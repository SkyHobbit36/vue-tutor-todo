<script setup lang="ts">
import { Theme } from '@/types/Theme.enum';
import { inject } from 'vue';

const theme = inject<Theme>('theme');
</script>

<template>
    <v-btn :class="[theme + '-button', 'button']">
        <slot></slot>
    </v-btn>
</template>

<style scoped>
.button {
    display: flex;
    border-radius: 5px;
    padding: 15px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.light-button {
    color: white;
    background-color: darkslategray;
}
.light-button:hover {
    background-color: #4f7979;
}
.dark-button {
    color: darkslategray;
    background-color: white;
}
.dark-button:hover {
    background-color: #e5e5e5;
}
</style>
