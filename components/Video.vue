<template>
  <div class="container px-4 mx-auto pt-8 pb-16">
    <h2 class="text-center text-brand-500 font-medium text-5xl mb-4" v-html="title"></h2>
    <div class="mx-auto bg-black rounded shadow-xl md:w-2/3">
      <div class="embed-responsive aspect-w-16 aspect-h-9">
        <iframe
          :src="url"
          class="embed-responsive-item rounded"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'url'],
}
</script>
