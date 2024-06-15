<template>
  <div>
    <USelectMenu v-if="astronauts" v-model="selected.astronaut" :options="astronauts" searchable />
    <pre v-if="evas" class="whitespace-pre-wrap">
      {{ data }}
    </pre>
  </div>
</template>

<script lang="ts" setup>
import type { RpcResponse } from '#surrealdb/types'

interface Astronauts {
  astronauts: string[]
}
interface EvaMission {
  country: string
  crew: string[]
  date?: string
  duration?: string
  eva?: number
  purpose?: string
  vehicle?: string[]
}

const { sql } = useSurrealDB({ database: 'nasa' })

const { data: _astronauts } = await sql<[RpcResponse<Astronauts>,]>('SELECT array::group(crew) as astronauts FROM ONLY eva_missions GROUP ALL LIMIT 1;')
const astronauts = computed(() => _astronauts.value && _astronauts.value[0].result.astronauts)

const selected = reactive({
  astronaut: null
})
const { data, error } = await sql<[RpcResponse<EvaMission[]>,]>('SELECT * FROM eva_missions WHERE crew CONTAINS $astronaut ORDER eva, date;',
  selected, {
  immediate: false,
  watch: [selected],
})
const evas = computed(() => data.value && data.value[0].result)

error.value && console.error(error.value)
</script>
