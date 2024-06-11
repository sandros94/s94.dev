<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Links } from '#s94-ui/types'

useState('social-links').value = [
  {
    icon: 'i-simple-icons-github',
    to: 'https://github.com/sandros94',
    target: '_blank',
  },
  {
    icon: 'i-simple-icons-mastodon',
    to: 'https://mastodon.social/@sandros94',
    target: '_blank',
  },
  {
    icon: 'i-simple-icons-x',
    to: 'https://x.com/_sandros94',
    target: '_blank',
  }
] satisfies Links
</script>
