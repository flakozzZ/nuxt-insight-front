<script setup lang="ts">
import {useUserStore} from "~/middleware/user";

const ADMIN_MENU_ITEMS = [
  { label: 'Аналитика', icon: 'analytics', routeName: '' },
  { label: 'Добавить менеджера', icon: 'add_user', routeName: '' },
  { label: 'Добавить учителя', icon: 'student', routeName: '' },
  { label: 'Добавить класс', icon: 'user_group', routeName: '' },
  // { label: 'Оқушылар', icon: 'user_list', routeName: 'ManagerStudentList' },
  // { label: 'Онлайн тесттер', icon: 'test', routeName: 'AdminOnlineTestList' },
  { label: 'Добавить курс', icon: 'graduation_cap', routeName: '' },
  // { label: 'Тест қосу', icon: 'exam', routeName: 'AdminTestList' },
  { label: 'Добавить профессию', icon: 'star', routeName: '' },
  { label: 'Добавить ВУЗ', icon: 'plus', routeName: '' },
  { label: 'Новости', icon: 'newspaper', routeName: '' },
]

const MANAGER_MENU_ITEMS = [
  { label: 'Добавить ученика', icon: 'plus', routeName: '' },
  { label: 'Все ученики', icon: 'user_group', routeName: '' },
  { label: 'Мои ученики', icon: 'user_circle', routeName: '' },
]

const TEACHER_MENU_ITEMS = [
  { label: 'Главная страница', icon: 'star', routeName: '' },
  { label: 'Профиль', icon: 'user', routeName: '' },
  { label: 'Классы', icon: 'user_group', routeName: '' },
  // { label: 'Тапсырмалар', icon: 'pencil', routeName: 'TeacherTask' },
  // { label: 'Бағалар', icon: 'text_check', routeName: 'TeacherGrade' },
  // { label: 'Аналитика', icon: 'analytics', routeName: 'TeacherAnalytics' },
]

const STUDENT_MENU_ITEMS = [
  { label: 'Курсы', icon: 'star', routeName: '' },
  { label: 'Профиль', icon: 'user', routeName: '' },
  { label: 'Успеваемость', icon: 'bookmark', routeName: '' },
  { label: 'Вопрос - Ответ', icon: 'question', routeName: '' },
  { label: 'Новости', icon: 'globe', routeName: '' },
  { label: 'ВУЗ', icon: 'graduation_cap', routeName: '' },
  // { label: 'Сыныптар', icon: 'user_group', routeName: 'TeacherGroupList' },
  // { label: 'Тапсырмалар', icon: 'pencil', routeName: 'TeacherTask' },
  // { label: 'Бағалар', icon: 'text_check', routeName: 'TeacherGrade' },
  // { label: 'Аналитика', icon: 'analytics', routeName: 'TeacherAnalytics' },
]

const getIcon = (name: string) => {
  return defineAsyncComponent(() => import(`~/assets/icons/${name}.svg`))
}


const router = useRouter()
const store = useUserStore()
const { user } = storeToRefs(store)
const menu_items = computed(() => {
  if(!user.value?.appRole?.name) return[]
  const items = {
    "ROLE_ADMIN": ADMIN_MENU_ITEMS,
    "ROLE_MANAGER": MANAGER_MENU_ITEMS,
    "ROLE_TEACHER": TEACHER_MENU_ITEMS,
    "ROLE_STUDENT": STUDENT_MENU_ITEMS
  }[user.value?.appRole?.name] || []
  return items
})
</script>

<template>
    <aside class="fixed top-0 left-0 right-0 w-253px h-screen bg-a-side pt-24 transition-transform -translate-x-full sm:translate-x-0">
    </aside>
</template>

<style scoped>

</style>