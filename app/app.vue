<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />

    <p>{{ message }}{{ hi }}</p>
  </div>
</template>

<script setup lang="ts">
const message = "Hello"
const hi = "dssdf"
</script>
