<template>
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
</template>

<style scoped>

</style>
