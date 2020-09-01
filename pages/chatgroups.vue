<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('chatgroups.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto mb-12 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <p v-html="$t('chatgroups.main_text')" class="mt-8 md:mt-0 mb-8" />
      </div>
    </section>

    <section class="bg-purple-400 pb-4 md:py-12">
      <div
        v-for="(category, categoryTitle) in $t('chatgroups.categories')"
        :key="category.title"
        class="container px-4 mx-auto pt-8 md:pb-12"
      >
        <h1 v-html="categoryTitle" class="text-white font-medium text-5xl leading-none mb-6" />
        <div class="md:flex flex-wrap -mx-2 mt-2">
          <div v-for="(description, groupName) in category" :key="groupName" class="md:w-1/2 p-2">
            <div class="bg-white rounded-lg shadow p-6 md:p-8">
              <div class="flex justify-between items-center h-12 mb-4">
                <h2 class="text-2xl font-bold text-purple-500 uppercase tracking-wider">
                  {{ groupName }}
                </h2>
                <a v-show="groupName in chatLinks" :href="chatLinks[groupName]" target="_blank">
                  <button class="button-pink">
                    {{ $t('chatgroups.join') }}
                  </button>
                </a>
              </div>
              <p class="text-xl">
                {{ description }}
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
      chatLinks: {
        Outsite: 'https://outsite.nl/#contact',
        Announcements: 'https://chat.whatsapp.com/5yMBCohMukj1oCVR4lPHer',
        Discord: 'https://dwhdelft.nl/discord',
        EatingOUT: 'https://chat.whatsapp.com/FlIbRLHUlzv1dvdv0WOisV',
        'Saturday bar': 'https://chat.whatsapp.com/DjwXYRiaO1ZEhZS1vUOYjp',
        'Chicks before Ducks': 'https://chat.whatsapp.com/HNu9CDB4jH78s0qP6SAvI5',
        ChocOUT: 'https://chat.whatsapp.com/JcZdNnnXhLTDleFtgtYyAn',
        'Darkrooms & Daddies': 'https://chat.whatsapp.com/KCmnuJBNhbzKTjOtt7nkS8',
        'Gender Blender': 'https://chat.whatsapp.com/LkLFvzAt26b4dJzlgBV7pO',
        Minecraft: 'https://chat.whatsapp.com/1A7sMvswOjoAvIMF4E4hpK',
        'Politics & Discussion': 'https://chat.whatsapp.com/CSfNGQlryhU8XyRxrQaLpR',
        Strijders: 'https://chat.whatsapp.com/KcS3hC4ZVk391Kqcwnc3I5'
      }
    }
  }
}
</script>
