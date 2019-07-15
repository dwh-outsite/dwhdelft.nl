<template>
  <div class="container mx-auto pt-24 pb-16">
    <div class="text-center">
      <h1 class="tracking-wide font-semibold uppercase text-2xl mb-12 mx-2">
        {{ title }}
      </h1>
    </div>
    <div class="flex justify-center mt-4">
      <div class="bg-white rounded shadow flex-1 mx-2">
        <img src="act_1.jpg" class="rounded-t" />
        <div class="p-4 pt-3">
          <h3 class="text-pink-400 text-xl font-bold">CraySea in Love</h3>
          <span class="text-gray-500">March 7, 2019 at 10 PM – 4 AM</span>
        </div>
      </div>
      <div class="bg-white rounded shadow flex-1 mx-2">
        <img src="act_2.jpg" class="rounded-t" />
        <div class="p-4 pt-3">
          <h3 class="text-pink-400 text-xl font-bold">Nowee 2019: Karaoke</h3>
          <span class="text-gray-500">April 4, 2019 at 9 PM – 2 AM</span>
        </div>
      </div>
      <div class="bg-white rounded shadow flex-1 mx-2">
        <img src="act_3.jpg" class="rounded-t" />
        <div class="p-4 pt-3">
          <h3 class="text-pink-400 text-xl font-bold">Board Interest Drink</h3>
          <span class="text-gray-500">
            March 28, 2019 at 10 PM – 12 AM
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>
