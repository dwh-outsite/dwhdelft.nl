<script setup>
const props = defineProps({
  googleDriveId: String,
  localFiles: Array,
  center: { type: Boolean, default: false },
})

const isUsingLocal = computed(() => !!props.localFiles?.length)

const files = isUsingLocal.value ? ref(props.localFiles) : useGoogleDrive(props.googleDriveId)

const filesForDisplay = computed(() =>
  files.value.map((file) => ({
    ...file,
    name: file.name.substr(0, file.name.indexOf(',')),
    title: file.name.slice(file.name.indexOf(', ') + 2, file.name.lastIndexOf(',')),
    publishDate: file.name.slice(file.name.lastIndexOf(', ') + 2),
  }))
)

const goToFile = (file) => {
  const url = file.webViewLink || file.url || file.path
  window.open(url, '_blank')
}
</script>

<template>
  <div
    :class="
      center ? 'flex justify-center max-w-md mx-auto' : 'grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-5'
    "
  >
    <ElementsActionCard
      v-for="file in filesForDisplay"
      :key="file.id"
      :title="file.name"
      :content="file.publishDate"
      titleClass="text-xl"
      contentClass="px-4 pt-6 pb-3"
      clickable
      @click="goToFile(file)"
    >
      <template #header>
        <img :src="file.thumbnailLink" class="size-full object-cover" />
      </template>
      <p class="-mt-4 text-base text-gray-600">{{ file.publishDate }}</p>
    </ElementsActionCard>
  </div>
</template>
