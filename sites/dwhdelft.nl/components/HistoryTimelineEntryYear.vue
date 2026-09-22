<template>
  <div>
    <div class="h-full w-6 flex items-center justify-center">
      <div class="h-full w-1 bg-brand-300 pointer-events-none"></div>
    </div>
    <div
      class="
        w-16
        sm:w-20
        h-16
        sm:h-20
        absolute
        top-12
        sm:top-1/2
        -mt-10
        -ml-3
        sm:-ml-7
        rounded-full
        bg-white
        flex
        items-center
        justify-center
        border-8 border-brand-300
      "
    >
      <span class="text-brand-600 tracking-wider font-bold text-lg" v-text="year" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['year'],
}
// w-20
// h-20
// absolute
// top-0
// sm:top-1/2
// mt-2
// sm:-mt-10
// -ml-6
// sm:-ml-7
// rounded-r-full
// sm:rounded-full
// bg-white
// flex
// items-center
// justify-center
// border-8 border-brand-300
</script>
