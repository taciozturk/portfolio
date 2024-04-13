<template>
  <ul>
    <li v-for="link in links" :key="link.id" class="text-sm font-semibold">
      <NuxtLink
        :class="{
          'ml-4 text-xs font-medium': level,
          'text-primary': activeId === link.id,
        }"
        :to="{ path: route.path, hash: `#${link.id}` }"
        class="hover:text-primary"
      >
        {{ link.text }}
      </NuxtLink>
      <TocLinks
        :active-id="activeId"
        :level="level + 1"
        :links="link.children"
      />
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
  activeId: {
    type: String,
    default: null,
  },
});
</script>
