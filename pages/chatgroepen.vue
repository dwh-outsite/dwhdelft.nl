<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('chatgroepen.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto mb-12 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <p v-html="$t('chatgroepen.main_text')" class="mt-8 md:mt-0 mb-8" />
      </div>
    </section>

    <section class="bg-purple-300">
      <div v-for="category in chatGroups" :key="category.title" class="container px-4 mx-auto pt-8 pb-12">
        <div class="text-center mb-6">
          <h1 class="text-white font-medium text-5xl">{{ category.title }}</h1>
        </div>
        <div class="md:flex flex-wrap -mx-2 mt-2">
          <div v-for="group in category.items" :key="group.name" class="md:w-1/2 p-2">
            <div class="bg-white rounded shadow p-6 md:p-8">
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                  <h2 class="text-2xl font-bold ml-3 text-purple-500 uppercase tracking-wider">
                    {{ group.name }}
                  </h2>
                </div>
              </div>
              <p :class="'text-lg relative clamp-lines'">
                {{ group.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: {
    Header
  },
  data() {
    return {
      chatGroups: Object.keys(this.$t('chatGroups')).map(category => {
        return {
          title: category,
          items: Object.keys(this.$t('chatGroups.' + category)).map(name => {
            return {
              name,
              description: this.$t('chatGroups.' + category + '.' + name)
            }
          })
        }
      })
    }
  }
}
</script>

<style>
.clamp-lines {
  height: 100px;
}
</style>
