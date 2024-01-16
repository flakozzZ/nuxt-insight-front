<script setup lang="ts">
import {useUserStore} from "~/middleware/user";
import type {AxiosError} from "axios";


definePageMeta({
  layout: "custom"
})

const router = useRouter()
const store = useUserStore()
const {LOGIN_USER, LOGOUT_USER} = store
const {user} = storeToRefs(store)

const is_loading = ref(false)
const email = ref("")
const password = ref("")
const error = ref("")


const authorize = async() => {
  is_loading.value = true
  error.value = ''
  try {
    const data = await LOGIN_USER({
      email: email.value,
      password: password.value
    })
    handleRouteChange(data?.appRole.name)
    // await router.push({ name: 'AdminAnalytics' })
  } catch(e) {
    const errors = e as AxiosError
    error.value = errors.response.data?.detail || 'Ошибка!'
  } finally {
    is_loading.value = false
  }
}

const handleRouteChange = (role: string) => {
  const routeName = {
    'ROLE_STUDENT': 'student-courses',
    'ROLE_ADMIN': 'admin-courses',
    'ROLE_MANAGER': 'manager-teachers',
    'ROLE_TEACHER': 'teacher-groups'
  }[role]
  router.push({
    name: routeName,
  })
}



watch(user, (newValue) => {
  if(newValue) handleRouteChange(newValue.appRole.name)
})




</script>

<template>
  <div class="login__item">
    <label for="email">Email</label>
    <ui-v-input v-model="email" class="my-2" placeholder="Email" type="email" />
    <label for="password">Password</label>
    <ui-v-input v-model="password" class="my-2" placeholder="Enter a password" type="password" />
    <ui-v-button @click="authorize" class="mt-4" type="primary" size="lg" full-width>Войти</ui-v-button>
  </div>
</template>

<style scoped lang="scss">
  .login__item {
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    padding-top: 300px;
  }
</style>