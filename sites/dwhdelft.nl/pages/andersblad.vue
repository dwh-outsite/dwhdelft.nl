<i18n lang="yaml">
en:
  title: Andersblad
  main_text: The association magazine of DWH is published several times a year.
    Earlier editions can be seen here in PDF format. The magazine is (partly) in Dutch.
  list_title: <strong>Andersblad</strong> Editions
nl:
  title: Andersblad
  main_text: Het verenigingsblad van DWH verschijnt meerdere malen per jaar.
    Eerdere edities zijn hier te downloaden in PDF formaat.
  list_title: <strong>Andersblad</strong> Edities
</i18n>

<template>
  <div>
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <PageIntroText>
      <p v-html="$t('main_text')" />
    </PageIntroText>

    <section class="bg-brand-400">
      <div class="container px-4 mx-auto pt-8 pb-12">
        <div class="text-center mb-6">
          <h1 class="text-white font-medium text-5xl" v-html="$t('list_title')" />
        </div>
        <FileCards google-drive-id="1z_V_JSdyxX9jGH8CmC1ahMCtRk4tlzfM" />
      </div>
    </section>
  </div>
</template>
