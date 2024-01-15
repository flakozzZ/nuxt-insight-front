<script lang="ts">
export default {
  name: 'v-input'
}
</script>

<template>
  <div class="field">
    <input
        :type="props.type"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        autocomplete="new-password"
        :disabled="disabled"
        class="field__input">
  </div>
</template>

<script setup lang="ts">

interface Props {
  type: 'text' | 'password' | 'email' | 'url'
  placeholder: string
  modelValue?: string | number
  disabled?: boolean
  autocomplete?: boolean
}

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const props = withDefaults(defineProps<Props>(), {
  autocomplete: true
})
</script>

<style scoped src="./index.scss">

</style>