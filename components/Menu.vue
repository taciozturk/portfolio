<template>
  <nav class="font-mono">
    <ul class="flex flex-col md:flex-row md:space-x-4">
      <li>
        <ULink
          active-class="text-primary"
          inactive-class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          to="/"
          >Home
        </ULink>
      </li>
      <li>
        <ULink
          active-class="text-primary"
          inactive-class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          to="/three-d"
          >3D
        </ULink>
      </li>
      <li>
        <ULink
          active-class="text-primary"
          inactive-class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          to="/blog"
          >Blog
        </ULink>
      </li>
      <li>
        <ULink
          active-class="text-primary"
          inactive-class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          to="/about"
          >About
        </ULink>
      </li>
      <li>
        <ULink
          active-class="text-primary"
          inactive-class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          to="/projects"
          >Projects
        </ULink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
<script lang="ts" setup></script>
