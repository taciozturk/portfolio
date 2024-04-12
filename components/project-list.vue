<template>
  <div>
    <h2 class="mb-10 font-medium text-xl">
      Take a look at my github projects!
    </h2>

    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repo in data"
          class="border border-2 rounded-sm border-gray-400 p-4 hover:border-primary hover:border-xl hover:text-primary"
        >
          <a :href="repo.html_url" target="_blank">
            <div class="semi-bold ">
              {{ repo.name }}
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const { error, pending, data } = await useFetch(
  "https://api.github.com/users/taciozturk/repos"
);
console.log(data);
</script>
