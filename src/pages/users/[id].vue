<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { GetUser } from "@/services/users.service";
import type { User } from "@/types/entity.types";

const route = useRoute();
const state = reactive<{
  id: string | null;
  user: User | null;
}>({ id: null, user: null });

onMounted(async () => {
  state.id = route.params?.id as string;
  await onGetUser(state.id);
});

async function onGetUser(id: string) {
  const [error, response] = await GetUser(id);
  if (response) {
    state.user = response;
  } else {
    console.error(`get user -- ${error}`);
  }
}
</script>
<template>
  <div>{{ state.user }}</div>
</template>
