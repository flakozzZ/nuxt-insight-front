<script setup lang="ts">
import {useUserStore} from "~/middleware/user";
import VInput from "~/components/v-input/index.vue";

definePageMeta({
  layout: "custom"
})

const store = useUserStore()
const {LOGIN_USER} = store
const {user} = storeToRefs(store)

const is_loading = ref(false)
const email = ref("")
const password = ref("")
const error = ref("")


const auth = async () => {
  is_loading.value = true
  error.value = ''
  try {
    const data = await LOGIN_USER({
      email: email.value,
      password: password.value
    })

  }
}



</script>

<template>
  <NuxtLayout name="custom">
    <v-input type="email" placeholder="Email"/>
    <v-input type="password" placeholder="Password"/>
    <button type="submit">Submit</button>
  </NuxtLayout>
</template>

<style scoped>

</style>