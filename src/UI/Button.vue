<script setup lang="ts">
</script>

<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style scoped>
.button {
    display: flex;
    border-radius: 5px;
    color: white;
    background: darkslategray;
    padding: 15px;
    border: 1px solid darkslategray;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.button:hover {
    background: #4f7979;
}
</style>
