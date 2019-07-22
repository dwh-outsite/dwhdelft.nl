<template>
  <p class="leading-tight mb-6">
    <strong>{{ name }}</strong> | {{ role }}<br />
    <span class="text-gray-400">{{ email }}</span>
  </p>
</template>

<script>
export default {
  props: ['name', 'role', 'email']
}
</script>
