<template>
  <div class="container py-5">
    <div class="about">
      <h1 class="mb-4">Über uns</h1>
      <p class="lead">
        Willkommen bei unserer To-Do Listen Anwendung! Diese Anwendung wurde entwickelt, um Ihnen zu helfen, Ihre Aufgaben zu organisieren und Ihre Produktivität zu steigern.
      </p>
      <h2 class="mt-5">Unsere Mission</h2>
      <p>
        Unsere Mission ist es, Menschen auf der ganzen Welt dabei zu helfen, ihre täglichen Aufgaben effizienter zu verwalten. Wir glauben, dass eine gut organisierte To-Do Liste der Schlüssel zu einem produktiveren und stressfreieren Leben ist.
      </p>
      <h2 class="mt-5">To-Do Liste</h2>
      <p class="lead">
        Mit unserer To-Do Listen Anwendung können Sie Ihre Aufgaben einfach hinzufügen, bearbeiten und verwalten. Behalten Sie den Überblick über Ihre Aufgaben und steigern Sie Ihre Produktivität.
      </p>
      <div class="mt-4">
        <router-link to="/todo" class="btn btn-primary btn-lg">Zur To-Do Liste</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView'
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.lead {
  font-size: 1.25rem;
}

.about h1, .about h2 {
  color: #333;
  margin-bottom: 20px;
}

.about p {
  font-size: 1rem;
  line-height: 1.5;
}

.mt-4 {
  margin-top: 1.5rem;
}
</style>
