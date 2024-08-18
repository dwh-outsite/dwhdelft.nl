<script setup>
import { IconDownload } from '@iconify-prerendered/vue-zondicons'

const props = defineProps({
  folderId: { type: String, required: true },
})

const files = useGoogleDrive(props.folderId)
</script>

<template>
  <div v-if="files.length > 0" class="shadow-xl p-4 rounded-lg mb-12 bg-gray-200">
    <div class="-mb-4 text-lg">
      <div v-for="file in files" :key="file.id">
        <a :href="file.webViewLink" target="_blank">
          <div class="bg-white text-gray-800 hover:text-brand-500 p-3 rounded mb-4 flex items-center">
            <IconDownload class="h-5 inline mr-3" />
            <div class="flex-1">{{ file.name }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
