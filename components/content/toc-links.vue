<template>
  <ul>
    <li v-for="link in links" :key="link.id" class="text-sm font-semibold">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{ 'ml-4 text-xs font-medium': level }"
        class="hover:text-primary"
      >
        {{ link.text }}
      </NuxtLink>
      <TocLinks :links="link.children" :level="level + 1" />
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();

defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0,
  },
});
</script>
