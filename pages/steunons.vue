<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('steunons.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto  text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <div v-html="$t('steunons.volunteering')" class="mb-4" />

        <div v-html="$t('steunons.membership_title')" class="mb-0" />
        <div v-html="$t('signup.main_text')" class="mb-4" />
        <div v-html="$t('steunons.membership_post')" class="mb-4" />

        <div v-html="$t('steunons.donate')" class="mb-4" />
        <FilesList folder-id="17w67mVzuluZCErwxEFnZTdR1MCYrIy0i" />

        <div v-html="$t('steunons.andersblad_ads')" class="mb-4" />
        <div v-html="$t('steunons.sponsorkliks')" class="mb-4" />
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header'
import FilesList from '~/components/FilesList'

export default {
  components: {
    Header,
    FilesList
  }
}
</script>
