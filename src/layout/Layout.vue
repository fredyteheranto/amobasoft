<script setup>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import Content from "../components/Content.vue";
</script>

<template>
  <div class="min-h-screen">
    <div class="flex flex-row pt-14 px-10 pb-4">
      <div class="w-3/12 mr-6">
        <Sidebar />
      </div>

      <div class="w-10/12">
        <Navbar />
        <Content />
      </div>
    </div>
  </div>
</template>
