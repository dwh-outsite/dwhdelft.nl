<template>
  <div v-if="files.length > 0" class="shadow-xl p-4 rounded-lg mb-12 bg-gray-200">
    <div class="-mb-4 text-lg">
      <div v-for="file in files" :key="file.id">
        <a :href="file.webViewLink" target="_blank">
          <div class="bg-white hover:text-purple-500 p-3 rounded mb-4 flex items-center">
            <Zondicon icon="download" class="h-5 inline mr-3 fill-current" />
            <div class="flex-1">{{ file.name }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import GoogleDrive from '~/src/GoogleDrive'

export default {
  components: {
    Zondicon,
  },
  props: ['folderId'],
  data() {
    return {
      files: [],
    }
  },
  mounted() {
    GoogleDrive.listFiles(this.folderId).then((files) => {
      this.files = files
    })
  },
}
</script>
