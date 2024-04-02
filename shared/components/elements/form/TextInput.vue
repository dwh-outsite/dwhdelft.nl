<script setup>
const props = defineProps({
  placeholder: { type: String, required: false },
  type: { type: String, default: 'text' },
  required: { type: Boolean, default: undefined },
})
const model = defineModel()

const { parent } = getCurrentInstance()

let name = null
let required = props.required

if (parent.type.__name == 'FormElement') {
  name = parent.props.name
  required = required !== undefined ? required : parent.props.required
}

const classes = 'bg-white text-gray-800 rounded-lg block px-4 py-3 w-full'
</script>

<template>
  <input
    v-if="type !== 'textarea'"
    v-model="model"
    :type="type"
    :placeholder="placeholder || $t(`forms.placeholder.${name}`)"
    :required="required"
    :class="classes"
  />
  <textarea
    v-else
    v-model="model"
    :placeholder="placeholder || $t(`forms.placeholder.${name}`)"
    :required="required"
    :class="classes"
  />
</template>
