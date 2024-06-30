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
      <h2 class="mt-5">Das Team</h2>
      <p>
        Unser Team besteht aus erfahrenen Entwicklern und Designern, die sich leidenschaftlich dafür einsetzen, die besten Benutzererfahrungen zu schaffen.
      </p>
      <div class="row mt-4">
        <div class="col-md-4 text-center">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" class="rounded-circle mb-2" />
          <h5>Max Mustermann</h5>
          <p>Lead Developer</p>
        </div>
        <div class="col-md-4 text-center">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" class="rounded-circle mb-2" />
          <h5>Maria Musterfrau</h5>
          <p>Product Manager</p>
        </div>
        <div class="col-md-4 text-center">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" class="rounded-circle mb-2" />
          <h5>John Doe</h5>
          <p>UX/UI Designer</p>
        </div>
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

img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.about h1, .about h2 {
  color: #333;
  margin-bottom: 20px;
}

.about p {
  font-size: 1rem;
  line-height: 1.5;
}

.row {
  display: flex;
  justify-content: center;
}

.col-md-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding: 15px;
}
</style>
