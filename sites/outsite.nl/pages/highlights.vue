<i18n lang="yaml">
en:
  title: Our Highlights
nl:
  title: Onze Hoogtepunten
</i18n>

<template>
  <div>
    <header>
      <SmallHeader bg="bg-gray-200">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('title') }}
        </h1>
      </SmallHeader>
    </header>

    <section class="bg-gray-200 pb-12">
      <Highlights :excerpts="false" />
    </section>
  </div>
</template>
