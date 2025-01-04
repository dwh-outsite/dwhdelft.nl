<script setup>
import { IconDownload } from '@iconify-prerendered/vue-zondicons'

const props = defineProps({
  folderId: { type: String, required: true },
})

const files = useGoogleDrive(props.folderId)
</script>

<template>
  <div v-if="files.length > 0" class="mb-12 rounded-lg bg-gray-200 p-4 shadow-xl">
    <div class="-mb-4 text-lg">
      <div v-for="file in files" :key="file.id">
        <a :href="file.webViewLink" target="_blank">
          <div class="mb-4 flex items-center rounded bg-white p-3 text-gray-800 hover:text-brand-500">
            <IconDownload class="mr-3 inline h-5" />
            <div class="flex-1">{{ file.name }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
