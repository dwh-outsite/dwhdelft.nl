<template>
  <label class="radio">
    <input type="checkbox" :value="option" v-model="model" >
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
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
}
</script>
