<script setup lang="ts">

</script>

<template>
  <div>
    <v-header />
    <v-side />

    <div class="p-4 sm:ml-64">
      <div class="p-4 mt-14">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>