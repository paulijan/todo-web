<template>
  <div class="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
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
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.welcome-box {
  max-width: 80vw;
  width: 100%;
  max-height: 80vh;
  padding: 4rem;
  box-sizing: border-box;
}

h1 {
  font-size: 4rem;
}

p.lead {
  font-size: 2rem;
}

.btn {
  font-size: 1.5rem;
  padding: 1rem 2rem;
}
</style>
