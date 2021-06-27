<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="file in files" :key="file.id" class="md:w-1/2 xl:w-1/3 p-4">
      <a :href="file.webViewLink" target="_blank">
        <div class="shadow-xl p-6 rounded-lg bg-white hover:bg-brand-100 hover:text-brand-500 flex">
          <div>
            <img :src="file.thumbnailLink" class="h-48" />
          </div>
          <div class="flex-1 ml-4 flex flex-col justify-center">
            <h3 class="text-2xl font-semibold">{{ file.name }}</h3>
            <h4 class="text-xl">{{ file.title }}</h4>
            <p class="text-lg text-gray-600">{{ file.publishDate }}</p>
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
