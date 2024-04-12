<template>
  <div class="not-prose">
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repo in data"
          :key="repo.id"
          class="border border-2 rounded-sm border-gray-400 p-4 hover:border-primary hover:border-xl hover:text-primary font-mono"
        >
          <a :href="repo.html_url" target="_blank">
            <div class="flex items-center justify-between">
              <div class="semi-bold">
                {{ repo.name }}
              </div>
              <div class="text-sm">{{ repo.stargazers_count }} *</div>
            </div>
            <p class="text-xs text-gray-500">
              {{ repo.description }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const { error, pending, data } = await useFetch(
  "https://api.github.com/users/taciozturk/repos"
);
const repos = computed(
  () => data.value.filter((repo) => repo.description)
);

</script>
