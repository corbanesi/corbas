<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="mb-4">
    <RouterLink to="/" class="mx-4">Home</RouterLink>
    <RouterLink to="/users" class="mx-4">Users</RouterLink>
  </nav>
  <main class="my-4">
    <RouterView />
  </main>
</template>
