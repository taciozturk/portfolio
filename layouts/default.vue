<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt-5">
      <div class="text-xl text-primary font-semibold p-2 hover:bg-gray-200 ">
        <NuxtLink to="/">Taci Ozturk</NuxtLink>
      </div>
      <nav class="font-mono">
        <ul class="flex space-x-4">
          <li>
            <ULink
              active-class="text-primary"
              inactive-class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              to="/"
              >Home</ULink
            >
          </li>
          <li>
            <ULink
              active-class="text-primary"
              inactive-class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              to="/about"
              >About</ULink
            >
          </li>
        </ul>
      </nav>
    </header>

    <main class="p-2">
      <slot />
    </main>
  </div>
</template>
