<i18n lang="yaml">
en:
  description: DWH wint de Nationale Vrijwilligersprijzen 2023
  read_more: Read more
nl:
  description: DWH wint de Nationale Vrijwilligersprijzen 2023
  read_more: Lees meer
</i18n>

<template>
  <a href="/vrijwilligersprijzen">
    <div
      class="bg-white rounded shadow-xl border-2 border-brand-450 hover:bg-brand-450 hover:text-white text-lg md:text-xl text-brand-450 p-4 w-full z-20 md:w-auto md:inline-flex items-center relative"
    >
      <img src="../../assets/images/photos/vrijwilligersprijs/nvp2023.png" class="w-24 absolute bottom-4 " />
      <div class="ml-24 pl-4">
        <h2 class="font-bold leading-tight" v-text="$t('description')" />
        <p class="text-sm">{{ $t('read_more') }} &raquo;</p>
      </div>
    </div>
  </a>
</template>
