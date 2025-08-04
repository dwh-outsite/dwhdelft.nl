<i18n lang="yaml">
en:
  title: Frequently Asked Questions
  introduction:
    We do so many fun things at Outsite that we can imagine you have questions. Therefore, we have created an overview
    of the most frequently asked questions below. If your question is not listed, feel free to send us a message!
nl:
  title: Veelgestelde Vragen
  introduction:
    We doen zoveel leuke dingen bij Outsite, dat we ons kunnen voorstellen dat je vragen hebt. Daarom hebben we hieronder
    een overzicht gemaakt van de meest gestelde vragen. Staat jouw vraag er niet tussen? Stuur ons dan een berichtje!
</i18n>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { IconCheveronDown } from '@iconify-prerendered/vue-zondicons'

const { t, locale } = useT()

const { data: faqQuestions } = await useAsyncData(() => queryContent('faq').find())

const faqQuestionsCurrentLanguage = computed(() =>
  faqQuestions.value.filter((question) => question._path.endsWith(`.${locale.value}`))
)

const groupedFaqQuestions = computed(() =>
  faqQuestionsCurrentLanguage.value.reduce((acc, question) => {
    const group = question.group || 'Other'
    if (!acc[group]) {
      acc[group] = []
    }
    acc[group].push(question)
    return acc
  }, {})
)
</script>

<template>
  <LayoutSmallHeader>{{ t('title') }}</LayoutSmallHeader>

  <LayoutPageIntroText>
    <p v-text="t('introduction')" />
  </LayoutPageIntroText>

  <LayoutEmulatedSkewedSection
    v-for="(questions, group, index) in groupedFaqQuestions"
    :key="group"
    :top="index % 2 === 0"
    :bottom="index % 2 === 0 && index !== Object.keys(groupedFaqQuestions).length - 1"
    :contentClass="[
      index % 2 === 0 ? 'bg-brand-450 py-8' : 'bg-white pt-8 pb-24',
      index === Object.keys(groupedFaqQuestions).length - 1 ? 'pb-24' : '',
    ]"
    triangleClass="border-brand-450"
  >
    <ElementsContainer class="xl:max-w-4xl">
      <h1 class="mb-6 text-5xl font-bold leading-tight" :class="[index % 2 === 0 ? 'text-white' : 'text-brand-450']">
        {{ group }}
      </h1>
      <Disclosure v-for="(question, questionIndex) in questions" :key="question._path" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full items-center justify-between px-1 py-3 text-left text-lg font-semibold transition-all hover:opacity-80"
          :class="[
            questionIndex === questions.length - 1 || open ? '' : 'border-b',
            index % 2 === 0 ? 'border-white text-white' : 'border-gray-300 text-gray-700',
            open && ['mt-1 rounded-t-lg  px-6 text-white', index % 2 === 0 ? 'bg-brand-200' : 'bg-brand-450'],
          ]"
        >
          {{ question.question }}
          <IconCheveronDown class="size-6 transition-all" :class="{ 'rotate-180': open }" />
        </DisclosureButton>
        <transition
          enterActiveClass="transition duration-150 ease-out"
          enterFromClass="transform scale-95 scale-y-0 opacity-0"
          enterToClass="transform scale-100 opacity-100"
          leaveActiveClass="transition duration-75 ease-out"
          leaveFromClass="transform scale-100 opacity-100"
          leaveToClass="transform scale-95 opacity-0"
        >
          <DisclosurePanel>
            <ElementsActionCard class="rounded-t-none shadow-xl">
              <Markdown :content="question" />
            </ElementsActionCard>
          </DisclosurePanel>
        </transition>
      </Disclosure>
    </ElementsContainer>
  </LayoutEmulatedSkewedSection>
</template>
