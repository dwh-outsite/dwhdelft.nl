<template>
  <div v-if="restrictions">
    <div v-for="restriction in restrictions" :key="restriction" class="text-center flex items-center">
      <div class="bg-brand-200 rounded-lg px-2 py-1 text-xs uppercase tracking-wider" v-text="$tt(restriction)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['restrictions'],
}
</script>
