<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import type { User } from "@/types/entity.types";
import { GetUsers } from "@/services/users.service";
import CorbasDataTable from "@/components/corbas-table/CorbasDataTable.vue";

const state = reactive<{ users: User[]; total: number }>({
  users: [],
  total: 0,
});
const isLoading = ref(true);

const columns = [
  { key: "_id", label: "#" },
  { key: "nome", label: "Nome" },
  { key: "email", label: "E-mail" },
  { key: "administrador", label: "Administrador" },
  { key: "password", label: "Senha" },
];

onMounted(async () => {
  await onGetUsers();
});

async function onGetUsers() {
  isLoading.value = true;
  const [error, response] = await GetUsers();
  if (response) {
    state.users = response.usuarios;
    state.total = state.users.length;
  } else {
    console.error(`get users --- ${error}`);
  }
  isLoading.value = false;
}
</script>

<template>
  <div>User list view</div>
  <CorbasDataTable
    :is-loading="isLoading"
    :columns="columns"
    :rows="state.users"
    :total="state.total"
  ></CorbasDataTable>
</template>
<route lang="yaml">
meta:
  layout: home
</route>
