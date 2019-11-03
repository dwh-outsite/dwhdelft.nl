<template>
  <div class="container px-4 mx-auto pt-8 pb-12">
    <div class="text-center">
      <h1 class="text-white font-medium text-5xl" v-html="title"></h1>
    </div>
    <div class="md:flex justify-center">
      <div class="bg-white rounded shadow p-8 flex-1 mx-2 flex flex-col justify-between mt-4">
        <div class="flex-1">
          <div class="rounded-full w-16 h-16 p-4 bg-purple-500 mb-8 text-white">
            <Zondicon :icon="leftIcon" class="fill-current" />
          </div>
          <h2 class="text-xl font-bold mb-4 text-purple-500 uppercase tracking-wider">
            {{ leftTitle }}
          </h2>
          <p class="mb-8 text-lg">
            <slot name="left" />
          </p>
        </div>
        <div>
          <a :href="leftUrl">
            <button class="block button-pink">
              {{ leftButtonText }}
            </button>
          </a>
        </div>
      </div>
      <div class="bg-white rounded shadow p-8 flex-1 mx-2 flex flex-col justify-between mt-6 md:mt-4">
        <div class="flex-1">
          <div class="rounded-full w-16 h-16 p-5 bg-purple-500 mb-8 text-white">
            <Zondicon :icon="rightIcon" class="fill-current" />
          </div>
          <h2 class="text-xl font-bold mb-4 text-purple-500 uppercase tracking-wider">
            {{ rightTitle }}
          </h2>
          <p class="mb-8 text-lg">
            <slot name="right" />
          </p>
        </div>
        <div>
          <a :href="rightUrl">
            <button class="block button-pink">
              {{ rightButtonText }}
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  props: [
    'title',
    'leftIcon',
    'leftTitle',
    'leftButtonText',
    'rightIcon',
    'rightTitle',
    'rightButtonText',
    'leftUrl',
    'rightUrl'
  ],
  components: { Zondicon }
}
</script>
