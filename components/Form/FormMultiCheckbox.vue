<template>
  <label class="radio">
    <input v-model="model" type="checkbox" :value="option" />
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    value: [],
    option: String,
    label: String,
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
