<i18n lang="yaml">
en:
  title: ANBI
  main_text:
    - text:
        'DWH has been designated a public benefit institution (in Dutch: algemeen nut beogende instelling or ANBI) by the
        tax authority. An ANBI should have certain information available on their website. For convenience, we have
        collected them all on this page. This English version is provided as an extra convenience, the official version is
        the Dutch page.'
    - title: Name
      text: Delftse Werkgroep Homoseksualiteit (D.W.H.)<br />
        The shortened name of the association is DWH.
    - title: Rechtspersonen Samenwerkingsverbanden Informatie Nummer
      text: 'RSIN: 807864250'
    - title: Goal
      text:
        DWH is thé association by and for LGBT+ people in Delft that looks out for the LGBT+ community and their needs in
        this city and independently promotes the emancipation and awareness of LGBT+ people. DWH does this as much as
        possible in collaboration with other organisations at a local, national and international level.
    - text: 'The vision of the association is as follows:'
      bullets:
        - DWH fights hetero normativity and promotes the acceptation and itegration of LGBT+ lifestyles;
        - DWH stimulates societal discussion, awareness and change on issues of homosexuality, bisexuality and
          transgenders;
        - DWH creates a friendly and safe environment as a basis for LGBT+ emancipation;
        - DWH involves as many people as possible, inside and outside the association, with participation and
          organisation of its activities;
        - DWH connects people. Specifically also the various subgroups in the association.
    - title: Recompense policy
      text: The board members as well as other volunteers at DWH are unpaid. The board does have the means to provide
        compensation to members and volunteers for costs they incurred because of the association, which is done in
        accordance with the budget and reasonable bounds of good faith and fair dealing as it is commonly done in broader
        society. In practice only expenses claims pertaining to tasks performed in service of DWH are compensated.
        By the statutes of DWH the consent of the general assembly is required for starting, changing or terminating
        employment contracts.
    - title: Report of past activities
      text:
        'For a report of past activities we refer the reader to our annual report. Each year DWH creates and approves an
        annual report which contains among other things an account of completed activities over the preceding year.
        The most recent such report can be found here:'
  annual_plan:
    title: Policy plan
    text: 'For the policy plan we refer the reader to the annual plan. The most recent annual plan can be found here:'
  financial:
    title: Financial account
    text:
      For a financial account we refer the reader to the annual account. Each year DWH creates and approves the annual
      account in which the financial report and account of the preceding year is recorded.
nl:
  title: ANBI
  main_text:
    - text:
        DWH is door de belastingdienst aangewezen als een algemeen nut beogende instelling. Een ANBI hoort een aantal
        gegevens te publiceren op haar internetsite. Hier vindt u deze gegevens van DWH overzichtelijk bij elkaar.
    - title: Naam
      text: Delftse Werkgroep Homoseksualiteit (D.W.H.)<br />
        De verkorte naam van de vereniging is DWH.
    - title: Rechtspersonen Samenwerkingsverbanden Informatie Nummer
      text: 'RSIN: 807864250'
    - title: Doelstelling
      text:
        De Delftse Werkgroep Homoseksualiteit (DWH) is de vereniging van en voor LHBT+’ers in Delft die de belangen van de
        LHBT+ gemeenschap in die stad behartigt en zo onafhankelijk de emancipatie en bewustmaking van LHBT+ personen
        bevordert. DWH doet dit zoveel mogelijk in samenwerking met andere organisaties op lokaal, nationaal en
        internationaal niveau.
    - text: 'De visie van de vereniging is als volgt:'
      bullets:
        - DWH doorbreekt de heteronormen en het bevordert acceptatie en integratie van LHBT+ levensstijlen;
        - DWH stimuleert maatschappelijke discussie, bewustwording en verandering ter zake van homoseksualiteit,
          biseksualiteit en transgenders;
        - DWH creëert een gezellige en veilige sfeer als basis voor LHBT+ emancipatie;
        - DWH betrekt bewust zowel binnen als buiten de vereniging zo veel mogelijk mensen bij deelname en organisatie
          van activiteiten;
        - DWH verbindt mensen. Heel specifiek ook de groepen binnen de vereniging.
    - title: Beloningsbeleid
      text:
        De bestuursleden alsmede de andere vrijwilligers van DWH zijn onbezoldigd. Wel heeft het bestuur de mogelijkheid
        om een vergoeding aan leden en vrijwilligers vast te stellen voor de door hen gemaakte kosten vanwege de
        vereniging, zulks rekening houdend met de begroting en binnen de grenzen van redelijkheid en billijkheid als in
        het maatschappelijk verkeer gebruikelijk. In de praktijk worden derhalve uitsluitend kostendeclaraties vergoedt
        welke verband houden met de uitoefening van werkzaamheden te behoeve van DWH. Volgens de statuten van DWH is voor
        het aangaan, wijzigen of beëindigen van arbeidsovereenkomsten eerst goedkeuring van de algemene vergadering nodig.
    - title: Verslag uitgeoefende activiteiten
      text: 'Voor een verslag van uitgeoefende activiteiten wordt verwezen naar het jaarverslag. Jaarlijks stelt DWH het
        jaarverslag vast waarin onder meer verslag wordt gedaan van de uitgeoefende activiteiten over het afgelopen jaar.
        Het meest recente jaarverslag kan hier gevonden worden:'
  annual_plan:
    title: Beleidsplan
    text: 'Voor het beleidsplan wordt verwezen naar het jaarplan. Het meest recente jaarplan kan hier gevonden worden:'
  financial:
    title: Financiële verantwoording
    text:
      Voor een financiële verantwoording wordt verwezen naar de jaarrekening. Jaarlijks stelt DWH de jaarrekening vast
      waarin de financiële verantwoording over het afgelopen jaar wordt vastgelegd.
</i18n>

<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal" v-text="$t('title')" />
      </Header>
    </header>

    <PageIntroText class="-mb-8">
      <div v-for="paragraph in $t('main_text')" :key="paragraph.text" class="mb-4">
        <h3 v-if="paragraph.title" class="font-bold block" v-text="paragraph.title" />
        <p v-html="paragraph.text" />
        <ul v-if="paragraph.bullets" class="list-disc ml-8">
          <li v-for="bullet in paragraph.bullets" :key="bullet" v-text="bullet" />
        </ul>
      </div>
      <FilesList folder-id="1SEhPdLmDC-MxwcqiRnaMlAcvoPgnq16a" />
      <h3 class="font-bold block" v-text="$t('annual_plan.title')" />
      <p class="mb-4" v-html="$t('annual_plan.text')" />
      <FilesList folder-id="1Y_3eX7L6RKOnFMCi1m3YP4Dkwc9Ibw2Y" />
      <h3 class="font-bold block" v-text="$t('financial.title')" />
      <p class="mb-4" v-html="$t('financial.text')" />
      <FilesList folder-id="1wOt93uBOFba4lHrf6In1YZJPzT4L9Doi" />
    </PageIntroText>
  </div>
</template>
