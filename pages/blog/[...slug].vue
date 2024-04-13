<template>
  <article
    class="prose dark:prose-invert max-w-none prose-pre:bg-gray-800 dark:prose-pre:bg-gray-700"
  >
    <ContentDoc>
      <template #not-found> Content not found :(</template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-8 gap-16">
          <div
            :class="{
              'col-span-8 md:col-span-6': doc.toc,
              'col-span-8': !doc.toc,
            }"
          >
            <ContentRenderer :value="doc" />
          </div>
          <div v-if="doc.toc" class="hidden md:block md:col-span-2 not-prose">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2 text-primary-300">
                Table of Contents
              </div>
              <nav>
                <TocLinks :active-id="activeId" :links="doc.body.toc.links" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
const activeId = ref(null);
onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    }
  };
  const observer = new IntersectionObserver(callback, {
    threshold: 0.5,
  });
  const elements = document.querySelectorAll("h2,h3");

  for (const element of elements) {
    observer.observe(element);
  }

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element);
    }
  });
});
</script>
