<template>
  <div class="max-h-96">
    <h1>TresJS Demo</h1>
    <TresCanvas clear-color="white">
      <TresPerspectiveCamera />
      <TresMesh>
        <TresSphereGeometry />
        <TresMeshNormalMaterial />
      </TresMesh>
    </TresCanvas>
  </div>
</template>
<script lang="ts" setup></script>
