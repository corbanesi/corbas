<script setup lang="ts">
import CorbasPagination from "./CorbasPagination.vue";
interface Columns {
  key: string;
  label: string;
}

const props = withDefaults(
  defineProps<{
    isLoading: boolean;
    columns: Columns[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rows: Array<any>;
    total: number;
  }>(),
  {
    isLoading: false,
  }
);
</script>
<template>
  <table
    class="border-collapse w-full border border-slate-400 bg-white text-sm shadow-sm"
  >
    <thead class="bg-slate-50">
      <th
        class="border border-slate-300 font-semibold p-4 text-slate-900 text-left"
        v-for="(col, cIndex) in columns"
        :key="cIndex"
      >
        {{ col.label }}
      </th>
    </thead>
    <tbody v-if="rows.length > 0">
      <tr v-for="(row, rIndex) in rows" :key="rIndex">
        <td
          class="border border-slate-300 p-4 text-slate-900 text-left"
          v-for="(col, jIndex) in columns"
          :key="jIndex"
        >
          {{ row[col.key] }}
        </td>
      </tr>
    </tbody>
  </table>
  <CorbasPagination
    :total="props.total"
    :page-size="10"
    :current-page="1"
  ></CorbasPagination>
</template>
