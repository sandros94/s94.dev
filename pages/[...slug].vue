<template>
  <UCard class="mt-10">
    <template #header>
      <div class="flex justify-between">
        <h1>{{ path }}</h1>
        <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
      </div>
    </template>
    <div v-if="data && !error">
      <MDC class="prose prose-neutral dark:prose-invert max-md:prose-lg p-4" :value="data.content" />
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { withoutLeadingSlash } from 'ufo'
const { path } = useRoute()

const { data, error } = useFetch(`/api/page/${withoutLeadingSlash(path)}`)
</script>
