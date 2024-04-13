<template>
  <div class="container mx-auto max-w-3xl">
    <header class="flex justify-between items-center mt-5 pt-4">
      <div class="text-xl text-primary font-semibold p-2 hover:bg-gray-200">
        <NuxtLink to="/">Taci Ozturk</NuxtLink>
      </div>
      <Menu class="" />
      <ColorModeSelector class="pt-1" />
    </header>
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup></script>
