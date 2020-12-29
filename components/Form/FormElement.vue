<template>
  <p class="form-element">
    <label :class="required ? 'required' : ''" v-text="label" />
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: ['required', 'label'],
}
</script>
