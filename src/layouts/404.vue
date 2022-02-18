<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <main class="container mx-auto">
    <RouterView />
    <div>
      <button @click="router.back()">Voltar</button>
    </div>
  </main>
</template>
