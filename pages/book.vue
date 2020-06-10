<template>
  <div>
    <header>
      <Header small="true">
        <div
          v-text="$t('bookings.title_label')"
          class="bg-white rounded-lg px-2 py-1 text-xs uppercase tracking-wider inline"
        />
        <h1 v-text="$t('bookings.title')" class="text-4xl text-white font-normal mt-2" />
      </Header>
    </header>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Parisienne&display=swap');

.menu-title {
  font-family: 'Parisienne', cursive;
}

.information::before {
  @apply bg-purple-500 absolute w-full;
  height: 100%;
  transform: skewY(-7deg);
  content: '';
  z-index: -1;
  top: 0px;
}
</style>
