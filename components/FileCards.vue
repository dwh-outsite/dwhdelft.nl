<template>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
    <div v-for="file in files" :key="file.id">
      <a :href="file.webViewLink" target="_blank">
        <div class="group shadow-lg rounded-xl overflow-hidden bg-white hover:bg-brand-100 hover:text-brand-500">
          <div>
            <img :src="file.thumbnailLink" class="w-full group-hover:opacity-75" />
          </div>
          <div class="flex flex-col justify-center px-4 py-3">
            <h3 class="text-xl font-semibold">{{ file.name }}</h3>
            <p class="text-gray-600">{{ file.publishDate }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import GoogleDrive from '#/src/GoogleDrive'

export default {
  props: ['googleDriveId'],
  data() {
    return {
      files: [],
    }
  },
  mounted() {
    GoogleDrive.listFiles(this.googleDriveId).then((files) => {
      this.files = files.map((file) => {
        return {
          ...file,
          name: file.name.substr(0, file.name.indexOf(',')),
          title: file.name.slice(file.name.indexOf(', ') + 2, file.name.lastIndexOf(',')),
          publishDate: file.name.slice(file.name.lastIndexOf(', ') + 2),
        }
      })
    })
  },
}
</script>
