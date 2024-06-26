<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is an about page for our Vue.js application.</p>Fix path for AboutView.vue
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView'
});
</script>

<style scoped>
.about {
  margin: 20px;
}
</style>
