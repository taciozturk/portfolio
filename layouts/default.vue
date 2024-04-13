<template>
  <div class="container mx-auto max-w-4xl">
    <header class="flex justify-between items-center mt-5">
      <div
        class="flex items-center text-xl text-primary font-semibold md:space-x-12"
      >
        <div class="hidden md:block">
          <NuxtLink to="/">Taci Ozturk</NuxtLink>
        </div>
        <Menu class="pl-2" />
      </div>

      <ClientOnly>
        <ColorModeSelector class="pt-1" />
      </ClientOnly>
    </header>
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup></script>
