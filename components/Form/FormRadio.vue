<template>
  <label class="radio">
    <input type="radio" :value="option" :checked="value === option" @input="$emit('input', $event.target.value)" />
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    value: [String, Boolean, Number],
    option: String,
    label: String,
  },
}
</script>
