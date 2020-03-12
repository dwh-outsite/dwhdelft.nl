<template>
  <div class="container px-4 mx-auto pt-8 md:pt-0 pb-12 md:pb-8">
    <div class="md:flex justify-center">
      <div class="flex-1 mx-2 flex items-end mt-4">
        <div class="text-white">
          <h1 v-html="title" class="font-medium leading-none text-5xl mb-4"></h1>
          <p v-html="description" class="text-lg md:pr-40 mb-4" />
          <p v-html="outsiteHint" class="text-lg md:pr-40" />
        </div>
      </div>
      <div class="bg-white rounded-lg md:rounded-t-none p-8 flex-1 mx-2 flex flex-col justify-between mt-6 md:mt-0">
        <div class="flex-1">
          <div class="rounded-full w-16 h-16 p-5 bg-purple-500 mb-8 text-white">
            <Zondicon :icon="boxIcon" class="fill-current" />
          </div>
          <h2 class="text-xl font-bold mb-4 text-purple-500 uppercase tracking-wider">
            {{ boxTitle }}
          </h2>
          <p class="mb-8 text-lg">
            <slot name="box" />
          </p>
        </div>
        <div>
          <a :href="boxUrl">
            <button class="block button-pink">
              {{ boxButtonText }}
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
  components: { Zondicon },
  props: ['title', 'description', 'outsiteHint', 'boxIcon', 'boxTitle', 'boxButtonText', 'boxUrl']
}
</script>
