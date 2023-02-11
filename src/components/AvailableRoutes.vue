<template>
  <h4 class="font-bold text-lg">
    <h1>{{ tittle }}</h1>
  </h4>
  <div>
    <ul class="menu bg-base-100 w-56">
      <li
        class="hover-bordered"
        v-for="availableRoutes in getavAilableRoutes"
        :key="availableRoutes.id"
        :class="{ bordered: seletedRoutes?.id === availableRoutes.id }"
      >
        <a
          @click="
            store.dispatch('fetchselectedAvailableRoutes', availableRoutes.id)
          "
        >
          {{ availableRoutes.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const tittle = ref("Rutas Disponibles");
const getavAilableRoutes = computed(() => {
  return store.getters.getAvailableRoutes;
});

const seletedRoutes = computed(() => {
  return store.getters.getSeletedRoute;
});
console.log("seletedRoutes ", seletedRoutes?.id);
onMounted(() => {
  store.dispatch("fetchAvailableRoutes");
});
</script>
<style></style>
