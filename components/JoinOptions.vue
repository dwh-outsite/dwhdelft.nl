<template>
  <div class="container mx-auto pt-8 pb-12">
    <div class="text-center mb-4">
      <h1 class="text-white font-medium text-5xl" v-html="title"></h1>
    </div>
    <div class="flex justify-center">
      <div class="bg-white rounded shadow p-8 flex-1 mx-2 flex flex-col justify-between">
        <div class="flex-1">
          <div class="rounded-full w-16 h-16 p-4 bg-pink-400 mb-8 text-white">
            <Zondicon :icon="leftIcon" class="fill-current" />
          </div>
          <h2 class="text-xl font-bold mb-4 text-pink-400 uppercase tracking-wider">
            {{ leftTitle }}
          </h2>
          <p class="mb-8 text-lg">
            <slot name="left" />
          </p>
        </div>
        <div>
          <button class="block bg-pink-400 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow">
            {{ leftButtonText }}
          </button>
        </div>
      </div>
      <div class="bg-white rounded shadow p-8 flex-1 mx-2 flex flex-col justify-between">
        <div class="flex-1">
          <div class="rounded-full w-16 h-16 p-5 bg-pink-400 mb-8 text-white">
            <Zondicon :icon="rightIcon" class="fill-current" />
          </div>
          <h2 class="text-xl font-bold mb-4 text-pink-400 uppercase tracking-wider">
            {{ rightTitle }}
          </h2>
          <p class="mb-8 text-lg">
            <slot name="right" />
          </p>
        </div>
        <div>
          <button class="block bg-pink-400 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow">
            {{ rightButtonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  props: ['title', 'leftIcon', 'leftTitle', 'leftButtonText', 'rightIcon', 'rightTitle', 'rightButtonText'],
  components: { Zondicon }
}
</script>
