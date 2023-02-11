<template>
  <div class="py-8">
    <p>Seleccione Fecha</p>
    <input type="date" placeholder="Type here" class="input w-full max-w-xs" />
  </div>

  <div class="flex mt-6">
    <div
      class="bg-white border shadow-lg border-white rounded-xl w-8/12 mr-2 p-6"
    >
      <Calendar />
    </div>

    <div
      class="bg-white border shadow-lg border-white rounded-xl w-4/12 ml-2 p-6"
    >
      <AvailableRoutes />
    </div>
  </div>
</template>
<script setup>
import AvailableRoutes from "../components/AvailableRoutes.vue";
import Calendar from "../components/Calendar.vue";
</script>
<style></style>
