<i18n lang="yaml">
en:
  meet_up_with: Meet up with
  read_more: Read more
  read_less: Collapse
nl:
  meet_up_with: Afspreken met
  read_more: Lees meer
  read_less: Inklappen
</i18n>

<template>
  <ActionCard :title="buddy.name">
    <template v-slot:icon>
      <div class="rounded-full w-12 h-12 p-3 bg-purple-500 text-white mr-3">
        <Zondicon icon="user" class="fill-current" />
      </div>
    </template>

    <template v-slot:button>
      <PrimaryButton class="flex items-center" @click="$emit('meet', buddy)">
        {{ $t('meet_up_with') }} {{ buddy.name }}
        <Zondicon icon="arrow-thin-right" class="ml-2 w-4 fill-current" />
      </PrimaryButton>
    </template>

    <div :class="['text-lg relative', expanded ? 'pb-8' : 'clamp-lines']">
      <span class="absolute z-10 bottom-0 right-0 flex">
        <span class="w-32 block white-gradient" />
        <a class="text-purple-500 bg-white cursor-pointer" @click="readMore()">
          {{ $t('' + (expanded ? 'read_less' : 'read_more')) }}
        </a>
      </span>
      {{ buddy[$i18n.locale] }}
    </div>
  </ActionCard>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  props: ['buddy'],
  data() {
    return {
      expanded: false,
    }
  },
  methods: {
    readMore() {
      this.expanded = !this.expanded
    },
  },
}
</script>

<style>
.clamp-lines {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.white-gradient {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
}
</style>
