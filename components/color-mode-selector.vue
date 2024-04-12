<template>
  <div>
    <UToggle
      on-icon="i-heroicons-moon"
      off-icon="i-heroicons-sun"
      color="primary"
      v-model="selected"
    />
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const selected = ref(true)
watch(selected, selected => colorMode.preference = selected ? 'dark' : 'light')

</script>
