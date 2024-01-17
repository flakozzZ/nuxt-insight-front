<template>
  <div class="w-full h-screen bg-red">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>
<script setup lang="ts">

import {useUserStore} from "~/middleware/user";
import {onMounted} from "vue";

const store = useUserStore()
const {GET_USER} = store
onMounted(() => {
  const token = window.localStorage.getItem("@access-token")
  if(token) GET_USER()
})
</script>