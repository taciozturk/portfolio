<template>
  <h1>All blog posts</h1>
  <section>
    <ul class="grid grid-cols-1 gap-4">
      <li
        v-for="post in posts"
        :key="post._path"
        class="border border-2 rounded-sm border-gray-400 p-4 hover:border-primary hover:border-xl hover:text-primary font-mono"
      >
        <NuxtLink :to="post._path">
          <div class="flex items-center justify-between">
            <div class="semi-bold">
              {{ post.title }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-list', () => queryContent("/blog").only(['_path','title']).find());
</script>
