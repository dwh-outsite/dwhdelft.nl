<script setup>
const props = defineProps({
  googleDriveId: { type: String, required: true },
})

const files = useGoogleDrive(props.googleDriveId)

const filesForDisplay = computed(() =>
  files.value.map((file) => ({
    ...file,
    name: file.name.substr(0, file.name.indexOf(',')),
    title: file.name.slice(file.name.indexOf(', ') + 2, file.name.lastIndexOf(',')),
    publishDate: file.name.slice(file.name.lastIndexOf(', ') + 2),
  }))
)

const goToFile = (file) => {
  window.open(file.webViewLink, '_blank')
}
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
    <ElementsActionCard
      v-for="file in filesForDisplay"
      :key="file.id"
      :title="file.name"
      :content="file.publishDate"
      class="cursor-pointer group hover:bg-brand-100 transition-colors"
      titleClass="text-xl"
      contentClass="px-4 pt-6 pb-3"
      @click="goToFile(file)"
    >
      <template #header>
        <img :src="file.thumbnailLink" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
      </template>
      <p class="text-gray-600 text-base -mt-4">{{ file.publishDate }}</p>
    </ElementsActionCard>
  </div>
</template>
