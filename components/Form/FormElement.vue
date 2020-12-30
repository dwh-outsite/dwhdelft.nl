<template>
  <div class="form-element">
    <label :class="required ? 'required' : ''" v-text="label" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['required', 'label'],
}
</script>
