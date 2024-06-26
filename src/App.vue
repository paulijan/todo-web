<template>
  <div id="app">
    <ToDoList />
  </div>
</template>

<script setup lang="ts">
import ToDoList from './components/ToDoList.vue';
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';

#app {
  text-align: center;
  padding: 20px;
}
</style>
