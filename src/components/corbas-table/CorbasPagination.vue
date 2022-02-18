<script setup lang="ts">
import { computed, reactive } from "vue";

const props = defineProps<{
  pageSize: number;
  total: number;
  currentPage: number;
}>();

const state = reactive({ page: props.currentPage })

const maxPage = computed(() => {
  if (props.total <= 0) return 0;
  let maxPage = Math.floor(props.total / props.pageSize);
  let mod = props.total % props.pageSize;
  if (mod > 0) {
    maxPage++;
  }
  return maxPage;
});

const paging = computed(() => {
  let startPage = state.page - 2 <= 0 ? 1 : state.page - 2;
  if (maxPage.value - state.page <= 2) {
    startPage = maxPage.value - 4;
  }
  startPage = startPage <= 0 ? 1 : startPage;
  let pages = [];
  for (let i = startPage; i <= maxPage.value; i++) {
    if (pages.length < 5) {
      pages.push(i);
    }
  }
  return pages;
});
</script>
<template>
  {{ paging }}
  <div
    class="bg-white px-4 py-3 flex items-center justify-between border-gray-200"
  >
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ " " }}
          <span class="font-medium">1</span>
          {{ " " }}
          to
          {{ " " }}
          <span class="font-medium">10</span>
          {{ " " }}
          of
          {{ " " }}
          <span class="font-medium">97</span>
          {{ " " }}
          results
        </p>
      </div>
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Voltar</span>
            Voltar
          </a>
          <a
            aria-current="page"
            class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            1
          </a>
          <a
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            2
          </a>
          <a
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          >
            3
          </a>
          <span
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
          >
            ...
          </span>
          <a
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          >
            8
          </a>
          <a
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            9
          </a>
          <a
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            {{ maxPage }}
          </a>
          <a
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Avançar</span>
            Avançar
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
