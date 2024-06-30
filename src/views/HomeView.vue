<template>
  <div class="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
    <div class="welcome-box p-5 shadow rounded">
      <h1 class="mb-4">To-Do Liste</h1>
      <p class="lead">Organisiere deine Aufgaben einfach und effizient mit unserer To-Do-Liste.</p>
      <div class="mt-4">
        <router-link to="/todo" class="btn btn-primary btn-lg">Let's Start</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
/* Styles moved to src/assets/styles.css */
</style>
