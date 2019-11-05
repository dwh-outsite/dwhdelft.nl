<template>
  <div class="leading-tight mb-6 md:w-1/2">
    <strong>{{ name }}</strong> | {{ role }}<br />
    <span class="text-gray-400">{{ email }}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'role', 'email']
}
</script>
