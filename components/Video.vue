<template>
  <div class="container mx-auto pt-8 pb-12">
    <h2 class="text-center text-pink-500 font-medium text-5xl mb-4" v-html="title"></h2>
    <div class="mx-auto bg-black rounded shadow-xl w-2/3">
      <div class="embed-responsive aspect-ratio-16/9">
        <iframe
          class="embed-responsive-item rounded"
          :src="url"
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
  props: ['title', 'url']
}
</script>
