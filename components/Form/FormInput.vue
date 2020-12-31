<template>
  <div>
    <textarea
      v-if="type === 'textarea'"
      :value="value"
      :placeholder="placeholder"
      :required="$parent.required"
      @input="$emit('input', $event.target.value)"
    />
    <input
      v-else
      :value="value"
      :placeholder="placeholder"
      :type="type"
      :required="$parent.required"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    required: { type: Boolean, default: false },
    value: [String, Boolean, Number],
    placeholder: String,
    type: { type: String, default: 'text' },
  },
}
</script>
