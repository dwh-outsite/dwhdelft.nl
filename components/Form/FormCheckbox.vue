<template>
  <div class="form-element-gray flex items-center cursor-pointer" @click="$emit('input', !value)">
    <div
      :class="value ? 'bg-purple-500 border-purple-500' : 'hover:bg-purple-300 border-purple-300 '"
      class="w-8 h-8 rounded-lg border bg-gray-200 flex items-center justify-center"
    >
      <Zondicon v-show="value" icon="checkmark" class="h-4 w-4 text-white fill-current" />
    </div>
    <div class="flex-1 ml-2" v-text="label" />
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  props: ['value', 'label'],
}
</script>
