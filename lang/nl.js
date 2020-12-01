import barbuddies from '~/lang/nl_barbuddies.js'
import chatGroups from '~/lang/nl_chat_groups.js'

export default {
  menu: [
    { title: 'Home', url: localePath => localePath('index') },
    { title: 'Kom naar DWH', url: localePath => localePath('index') + '#join-dwh' },
    { title: 'Reserveren', url: localePath => localePath('book') },
    { title: 'EatingOUT', url: localePath => localePath('index') + '#eatingout' },
    { title: 'Voorlichting', url: localePath => localePath('education') },
    { title: 'Andersblad', url: localePath => localePath('andersblad') },
    { title: 'Contact', url: () => '#contact' }
  ],
  hero: {
    title: 'LHBT+ vereniging sinds 1968',
    subtitle: 'Voor iedereen in Delft en omgeving!',
    leftButton: 'Kom naar DWH',
    rightButton: 'Openingstijden'
  },
  description: {
    text: `DWH is dé onafhankelijke LHBT+ vereniging van Delft en omgeving. We zijn twee dingen; een ontmoetingsplek
      voor LHBT+ mensen en hun vrienden en een groep die actief strijdt voor meer LHBT+ rechten en acceptatie. In die
      tweede rol organiseren we voorlichtingen op scholen, introductiegroepen voor jongeren die net uit de kast zijn en
      allerlei openbare events rond dagen als coming out dag.
      <br>
      <br>
      Als ontmoetingsplek zijn we vier dagen per week geopend, met een wekelijkse eettafel, filmavond en twee
      baravonden. Daarnaast hebben we allerlei activiteiten door het jaar heen: queer dansfeesten om de maand,
      bierproeverijen, workshops, pub crawls en zelfs vakanties. Zie onze aankomende events hieronder!`,
    invitation: 'Wij zijn <strong>tijdelijk gesloten</strong> vanwege COVID-19.'
  },
  activities: {
    title: 'Aankomende activiteiten',
    defaults: {
      bar: {
        banner_title: 'Wekelijkse baravond',
        banner_subtitle: 'Open voor iedereen',
        title: 'Baravond',
        date: 'Elke zaterdag vanaf 19.00 uur'
      },
      eating_out: {
        banner_title: 'Wekelijkse eettafel',
        banner_subtitle: 'Alleen voor leden, aanmelden verplicht',
        title: 'EatingOUT',
        date: 'Elke dinsdag om 18.30 uur'
      }
    }
  },
  ways_to_join: {
    title: 'Kennismaken met <strong>DWH</strong>?',
    description: `Je bent altijd welkom op een zaterdagavond tijdens een baravond. Vind je dit spannend? Dan kun je
      gebruik maken van ons barbuddysysteem!`,
    outsite_hint: `Ben je 28 jaar of jonger? Kijk dan ook eens bij
      <a href="https://outsite.nl/" class="font-bold">Outsite</a>, het jongerendeel van de vereniging.`,
    bar_buddy: {
      title: 'Barbuddies',
      description: `Wil jij een keertje langskomen op een baravond maar ben je bang dat je je niet meteen op je gemak
        voelt? Meld je dan aan voor een barbuddy! Een barbuddy is iemand die jou de ins en outs kan vertellen over de
        vereniging, maar ook iemand die jou voor kan stellen aan nieuwe mensen.`,
      thursday_note: `Jonger dan 28? Kijk dan bij <a href="https://outsite.nl/barbuddy" class="underline">Outsite</a> om
        langs te komen op donderdag`,
      action: 'Vind een barbuddy',
      sign_up: 'Aanmelden voor een barbuddy',
      meet_up_with: 'Afspreken met',
      barbuddies_title: 'Onze <strong>Barbuddies</strong>',
      read_more: 'Lees meer',
      read_less: 'Inklappen'
    }
  },
  recurring_events: {
    announcement: '<strong>DWH</strong> is elke week op 4 avonden open',
    button: {
      title: `<strong>Reserveer</strong> nu voor één van onze activiteiten`,
      note: `Reserveren verplicht i.v.m. COVID-19`
    },
    closed_notice: {
      title: `Wij zijn <strong>tijdelijk gesloten</strong> vanwege COVID-19.`
    },
    events: [
      {
        name: 'EatingOUT',
        note: 'Alleen leden',
        day: 'Dinsdag',
        time: '----',
        description: `Elke dinsdagavond zitten we gezellig rond de eettafel om van een maaltijd te genieten, bereid door
          één van onze leden, met soms een activiteit achteraf.`,
        buttonText: 'Aanmelden',
        buttonLink: 'https://dwhdelft.nl/eatingout'
      },
      {
        name: 'Fillum',
        day: 'Woensdag',
        time: '----',
        description: `Dé gay filmavond van Delft: Elke week is er weer een andere klassieker of juist gloednieuwe film
          aan de beurt.`,
        buttonText: 'Programma <small>(voor leden)</small>',
        buttonLink: 'http://homodelft.nl/films/'
      },
      {
        name: 'Outsite',
        note: 'Max. 28 jaar',
        day: 'Donderdag',
        time: '----',
        description: `Onze baravond voor iedereen van 28 of jonger. Kom een drankje doen aan de bar, en check onze
          Outsite website voor aankomende events!`,
        buttonText: 'Ga naar Outsite.nl',
        buttonLink: 'https://outsite.nl/'
      },
      {
        name: 'Open Bar',
        day: 'Zaterdag',
        time: '----',
        description: `Zaterdagavond is dé queer baravond van Delft. Ontmoet nieuwe mensen, kom dansen bij een van onze
          feesten en doe mee met een van onze vele events!`
      }
    ]
  },
  eating_out: {
    title: 'EatingOUT: Onze wekelijkse eettafel',
    subtitle: 'Elke dinsdag eten voor maar 4 euro',
    button: 'Meld je aan voor aankomende dinsdag',
    notes: ['Alleen voor leden', 'Aanmelden verplicht']
  },
  forms: {
    label: {
      name: 'Hoe mogen we je noemen?',
      firstname: 'Voornaam',
      lastname: 'Achternaam',
      initials: 'Voorletters',
      email: 'E-mailadres',
      language: 'Taal',
      languages: {
        dutch: 'Nederlands',
        english: 'Engels',
        no_preference: 'Geen voorkeur'
      },
      remarks: 'Heb je verder nog vragen?',
      date_of_birth: 'Geboortedatum',
      phone_number: 'Telefoonnummer',
      residence: 'Woonplaats',
      address: 'Straat en Huisnummer',
      postal_code: 'Postcode',
      pronouns: 'Pronouns',
      barbuddy: 'Met wie wil je afspreken?',
      membership_fee: 'Tariefgroep Contributie (zie onderaan deze pagina)',
      iban: 'IBAN nummer voor betaling via automatisch incasso'
    },
    placeholder: {
      name: 'Naam',
      firstname: 'Voornaam',
      lastname: 'Achternaam',
      initials: 'Voorletters (bijvoorbeeld Q.B.)',
      email: 'E-mailadres',
      remarks: 'Opmerkingen of vragen',
      date_of_birth: 'Geboortedatum',
      phone_number: 'Telefoonnummer',
      residence: 'Naam van stad',
      address: 'Straat en Huisnummer',
      postal_code: 'Postcode (bijvoorbeeld 2611PV)',
      pronouns: 'bv. zij/haar, hij/hem, hen/hun',
      iban: 'IBAN nummer'
    },
    buttons: {
      sign_up: 'Aanmelden',
      submit: 'Verzenden',
      loading: 'Laden'
    },
    success: {
      heading: 'Het formulier is succesvol verstuurd',
      barbuddy: 'Je barbuddy neemt zo snel mogelijk contact met je op.',
      membership: 'We sturen je binnenkort een bevestiging van je lidmaatschap.'
    }
  },
  footer: {
    newsletter: {
      description: 'Blijf op de hoogte, meld je aan voor de <strong>DWH nieuwsbrief</strong>',
      button: 'Aanmelden'
    },
    leftTitle: 'Bestuur',
    rightTitle: 'Contact',
    board: {
      president: 'Voorzitter',
      secretary: 'Secretaris',
      treasurer: 'Penningmeester',
      general: 'Algemeen Bestuurslid'
    }
  },
  barbuddies,
  andersblad: {
    title: 'Andersblad',
    main_text: `
      Het verenigingsblad van DWH verschijnt meerdere malen per jaar. Eerdere edities zijn hier te downloaden in PDF
      formaat.
    `,
    list_title: '<strong>Andersblad</strong> Edities'
  },
  chatgroups: {
    title: 'Chatgroepen',
    join: 'Join',
    main_text: `
      We spreken elkaar buiten de baravonden om natuurlijk ook graag, en voor alllerlei interesses en doelen zijn 
      daarom chatgroepen ontstaan. Omdat je maar net moet weten dat die er zijn hebben we hieronder een fabulous 
      overzichtje voor je gemaakt!<br /><br />
      Wil je in een van deze chats maar is er geen join link? Stuur een berichtje naar de 
      <a href="https://api.whatsapp.com/send?phone=+31637560270" target="_blank" class="text-purple-500">
      verenigingstelefoon (+31 6 3756 0270)</a> met de chat waar je aan toegevoegd zou willen worden.
    `,
    categories: chatGroups
  },
  anbi: {
    title: 'ANBI',
    main_text: `
      DWH is door de belastingdienst aangewezen als een algemeen nut beogende instelling. Een ANBI hoort een aantal
      gegevens te publiceren op haar internetsite. Hier vindt u deze gegevens van DWH overzichtelijk bij elkaar.<br />
      <br />
      <strong>Naam</strong><br />
      Delftse Werkgroep Homoseksualiteit (D.W.H.)<br />
      De verkorte naam van de vereniging is DWH.<br />
      <br />
      <strong>Rechtspersonen Samenwerkingsverbanden Informatie Nummer</strong><br />
      RSIN: 807864250<br />
      <br />
      <strong>Doelstelling</strong><br />
      De Delftse Werkgroep Homoseksualiteit (DWH) is de vereniging van en voor LHBT+’ers in Delft die de belangen van de
      LHBT+ gemeenschap in die stad behartigt en zo onafhankelijk de emancipatie en bewustmaking van LHBT+ personen
      bevordert. DWH doet dit zoveel mogelijk in samenwerking met andere organisaties op lokaal, nationaal en
      internationaal niveau.<br />
      <br />
      De visie van de vereniging is als volgt:<br />
      <ul class="list-disc ml-8">
        <li>DWH doorbreekt de heteronormen en het bevordert acceptatie en integratie van LHBT+ levensstijlen;</li>
        <li>DWH stimuleert maatschappelijke discussie, bewustwording en verandering ter zake van homoseksualiteit,
            biseksualiteit en transgenders;</li>
        <li>DWH creëert een gezellige en veilige sfeer als basis voor LHBT+ emancipatie;</li>
        <li>DWH betrekt bewust zowel binnen als buiten de vereniging zo veel mogelijk mensen bij deelname en organisatie
            van activiteiten;</li>
        <li>DWH verbindt mensen. Heel specifiek ook de groepen binnen de vereniging.</li>
      </ul>
      <br />
      <strong>Beloningsbeleid</strong><br />
      De bestuursleden alsmede de andere vrijwilligers van DWH zijn onbezoldigd. Wel heeft het bestuur de mogelijkheid
      om een vergoeding aan leden en vrijwilligers vast te stellen voor de door hen gemaakte kosten vanwege de
      vereniging, zulks rekening houdend met de begroting en binnen de grenzen van redelijkheid en billijkheid als in
      het maatschappelijk verkeer gebruikelijk. In de praktijk worden derhalve uitsluitend kostendeclaraties vergoedt
      welke verband houden met de uitoefening van werkzaamheden te behoeve van DWH. Volgens de statuten van DWH is voor
      het aangaan, wijzigen of beëindigen van arbeidsovereenkomsten eerst goedkeuring van de algemene vergadering nodig.
    `,
    annual_report: `
      <strong>Verslag uitgeoefende activiteiten</strong><br />
      Voor een verslag van uitgeoefende activiteiten wordt verwezen naar het jaarverslag. Jaarlijks stelt DWH het
      jaarverslag vast waarin onder meer verslag wordt gedaan van de uitgeoefende activiteiten over het afgelopen jaar.
      Het meest recente jaarverslag kan hier gevonden worden:
    `,
    annual_plan: `
      <strong>Beleidsplan</strong><br />
      Voor het beleidsplan wordt verwezen naar het jaarplan. Het meest recente jaarplan kan hier gevonden worden:
    `,
    financial: `
      <strong>Financiële verantwoording</strong><br />
      Voor een financiële verantwoording wordt verwezen naar de jaarrekening. Jaarlijks stelt DWH de jaarrekening vast
      waarin de financiële verantwoording over het afgelopen jaar wordt vastgelegd.
    `
  },
  education: {
    title: 'Voorlichting',
    main_text: `
      Wie kan het zich niet herinneren, de puberteit? Een periode waar veel in verandert… Zo begint de groei van
      beharing, maak je je los van je ouders en word je voor het eerst verliefd! Maar wat nou als je op iemand verliefd
      wordt van je eigen geslacht?<br />
      <br />
      Veel LHBT+ jongeren weten zich hier geen raad mee en durven het niet te vertellen omdat ze bijvoorbeeld bang zijn
      het doelwit te worden van pesterijen. Op de middelbare scholen wordt, jammer genoeg, het woord homo nog vaak
      genoeg als scheldwoord gebruikt. Het blijkt dat de jongeren vaak geen goed besef hebben van wat homoseksualiteit
      inhoudt, met soms onbegrip en pesterijen tot gevolg.<br />
      <br />
      Door voorlichting te geven zien de jongeren in dat homoseksualiteit eigenlijk helemaal niet vreemd is. Zo worden
      de stereotyperingen doorbroken, de termen binnen seksuele diversiteit behandeld en denken de jongeren zelf actief
      na over homoseksualiteit. Uit ervaring blijkt dat de jongeren na de voorlichting meer respect hebben voor seksuele
      diversiteiten en, nog veel belangrijker, voor elkaar!<br />
      <br />
      DWH kenmerkt zichzelf door een enthousiast en overwegend jong team aan voorlichters. Door dit kleine
      leeftijdsverschil met de middelbare scholieren is het vaak gemakkelijk voor hen zich te identificeren met onze
      voorlichters. Wilt u dat DWH bij uw school langskomt? Neem dan contact met ons op door te mailen naar
      <a href="mailto:voorlichting@dwhdelft.nl" class="text-purple-500">voorlichting@dwhdelft.nl</a>.<br />
      <br />
      Tot snel!<br />
      Jeroen en Justin<br />
      Coördinatoren voorlichting<br />
      <br />
      P.S. Lid van DWH en wil je misschien zelf voorlichter worden? Stuur ons dan ook een mail!
    `
  },
  signup: {
    title: 'Inschrijven als DWH lid',
    main_text: `
      Door lid te worden steun je ons in díe dingen die we zo belangrijk vinden, zoals de kennismakingsgroep,
      voorlichting op middelbare scholen, filmavond, baravonden en alle andere activiteiten bij DWH.<br />
      <br />
      Als lid ontvang je het blad van DWH: het Andersblad en mag je bij de EatingOUT aanschuiven waar je lekker,
      gezellig en goedkoop kunt eten.
    `,
    fee_description: `
      De contributie van DWH bedraagt minimaal € 48,50 / € 25,00 per jaar. Een hogere bijdrage is natuurlijk van harte
      welkom.<br />
      <br />
      In de algemene ledenvergadering is besloten dat DWH prijsdifferentiatie voor de contributie gebruikt, op basis van
      draagkracht. Om het niet al te ingewikkeld te maken, is er een vuistregel opgesteld: Voor mensen met een leeftijd
      tot en met 25 jaar, of vanaf de pensioengerechtigde leeftijd, geldt een gereduceerd tarief van tenminste € 25,00.
      Alle andere leden betalen de normale contributie van € 48,50.<br />
      <br />
      Er zijn uitzonderingen:
      <ul class="list-disc ml-8">
        <li>Mensen die aan de hand van de vuistregel korting op de contributie zouden krijgen, doch genoeg verdienen
            voor het normale tarief, behoren dat normale tarief ook te betalen.</li>
        <li>Mensen die aan de hand van de vuistregel geen korting op de contributie krijgen doch het financieel niet
            kunnen bolwerken om het (normale) tarief te betalen, kunnen zich wenden tot de penningmeester.</li>
        <li>Wanneer een verandering optreedt in de situatie die effect heeft op een van bovenstaande uitzonderingen,
            dient dit aan de penningmeester gemeld te worden.</li>
      </ul>
    `,
    fees: {
      full: 'Normaal (€ 48,50)',
      discounted: 'Gereduceerd (€ 25,00)'
    }
  },
  steunons: {
    title: 'Steun Ons',
    volunteering: `<strong>Vrijwilligers</strong><br />
      DWH draait volledig op vrijwilligers. Ieder jaar zetten er weer meer dan 100 mensen zich ieder in
      als vrijwilliger voor DWH. Vrijwilligers organiseren onze activiteiten, staan achter de bar, geven voorlichting
      op scholen en nog zoveel meer. Wilt u zich ook inzetten als vrijwilliger spreek ons dan eens aan in de bar of
      stuur ons een mailtje via <a href="mailto:bestuur@dwhdelft.nl" class="text-purple-500">bestuur@dwhdelft.nl</a>.`,
    membership_title: '<strong>Lidmaatschap</strong>',
    membership_post: `Meer informatie en inschrijven kan via deze
      <a href="https://dwhdelft.nl/signup/" class="text-purple-500">link</a>.`,
    donate: `<strong>Doneren</strong><br />
      Door te doneren aan DWH kunt u ons extra financieel ondersteunen. Extra geld
      kunnen wij altijd goed gebruiken om nog meer te kunnen organiseren voor de LHBT+ 
      gemeenschap in het organiseren van activiteiten, het bieden van een ontmoetingsplek,
      het geven van voorlichting (op scholen) en nog veel meer.<br />
      <br />
      U kunt een donatie aan DWH doen door een overboeking te maken naar
      IBAN: NL75 INGB 0003 2492 37 t.n.v. DWH ledenadministratie.
      Wilt u jaarlijks een gift doen en dit vastleggen dan kunt u het
      onderstaande formulier invullen en mailen naar
      <a href="mailto:penningmeester@dwhdelft.nl" class="text-purple-500">
      penningmeester@dwhdelft.nl</a>.
      Door ook een incassomachtiging hierbij af te geven kunt u uw gift elk jaar
      automatisch laten regelen.<br />
      <br />
      <strong>Fiscaal voordelig schenken</strong><br />
      De Delftse Werkgroep Homoseksualiteit heeft een <a href="https://dwhdelft.nl/anbi/"
      class="text-purple-500">ANBI-status</a> hierdoor kunt u onder bepaalde voorwaarden
      fiscaal voordelig schenken aan onze vereniging. Voor de exacte huidige voorwaarden
      verwijzen wij u door naar de
      <a href="https://www.belastingdienst.nl/wps/wcm/connect/nl/aftrek-en-kortingen/content/gift-aftrekken"
      class="text-purple-500">website van de belastingdienst</a>.<br />
      <br />
      Verdere vragen over het doneren aan DWH kunt u stellen door deze te mailen
      naar <a href="mailto:penningmeester@dwhdelft.nl" class="text-purple-500">
      penningmeester@dwhdelft.nl</a>`,
    andersblad_ads: `<strong>Adverteren in het Andersblad</strong><br />
      Het <a href="https://dwhdelft.nl/andersblad" class="text-purple-500">
      Andersblad</a> is het verenigingsblad van DWH dat 3 keer per jaar verschijnt
      (rond eind april, augustus en december). Het Andersblad staat altijd bomvol leuke
      artikelen, opinies, verslagen, foto’s en veel meer. Het blad wordt verspreid onder
      al onze leden en vele externe partners. De oplage is meer dan 300 exemplaren voor
      iedere editie.<br />
      <br />
      Er is de mogelijkheid om een advertentie in ons blad te plaatsen. Stuur een mail
      naar <a href="mailto:penningmeester@dwhdelft.nl" class="text-purple-500">
      penningmeester@dwhdelft.nl</a> voor de actuele prijzen en (verdere) mogelijkheden.`,
    sponsorkliks: `<strong>Sponsorkliks</strong><br />
       Door uw aankopen bij verschillende aangesloten webwinkels bij Sponsorkliks via onze
       link <a href="https://dwhdelft.nl/sponsorkliks" class="text-purple-500">
       dwhdelft.nl/sponsorkliks</a> te doen  kunt u DWH gratis sponsoren.
       Voor iedere aankoop krijgen wij een kleine commissie. Geld dat binnenkomt via
       Sponsorkliks komt direct als extra budget bij een van onze (roterende) commissies
       terecht. Zo draagt u op een makkelijke manier bij aan het mogelijk maken van meer
       leuke activiteiten en het realiseren van onze doelen.`
  },
  bookings: {
    title: 'Reserveren',
    title_label: 'Events',
    description_title: '<strong>Welkom terug</strong> bij DWH',
    description: `
      We zijn blij je weer te kunnen verwelkomen in deze tijden van Corona! Hoewel op een andere manier dan normaal,
      kun je de komende tijd weer bij ons terecht voor een gezellige baravond, een leuke film of een lekkere maaltijd.
      <br />
      <br />
      We vragen je bij je bezoek rekening te houden met een aantal zaken. Allereerst stellen wij het op prijs als je
      vooraf een <strong>reservering</strong> maakt, dat kan hieronder. Reserveringen zijn individueel en bij
      binnenkomst kun je een plekje uitzoeken aan een van onze 2-4 persoons tafels (waaraan iedereen op 1,5 meter
      afstand zit). Kom je samen met iemand uit hetzelfde huishouden, dan zijn er een aantal tweepersoonsplekken
      beschikbaar. Je kunt ook langskomen zonder vooraf te reserveren, we maken dan <strong>on the spot</strong>
      een reservering voor je.
      <br />
      <br />
      Bij binnenkomst vragen we je je handen te ontsmetten waarna kun je een leuk plekje uitkiezen waar je wilt gaan
      zitten. Je wordt tijdens een baravond aan tafel bediend, hiermee voorkomen we dat je veel moet rondlopen en
      paden met andere bezoekers moet kruisen. Daarnaast vragen we je gangpaden niet onnodig bezet te houden, het
      is niet de bedoeling gesprekken te voeren bij andere tafels. Op deze manier houden we het voor iedereen 
      <strong>veilig en verantwoord</strong>.
      <br />
      <br />
      Heb je vragen of leuke suggesties? Neem contact op via de contactgegevens onderaan deze pagina.
    `,
    form_information: {
      title: '<strong>Reserveren</strong> in tijden van COVID-19',
      description: `
        Je kunt links een reservering maken voor een event en/of tijdslot naar keuze. Om het voor iedereen zo veilig
        en eerlijk mogelijk te houden, hanteren wij daarbij de volgende regels.
      `,
      rules: [
        'De reservering vervalt 1 uur na aanvang van het tijdslot',
        `Je kunt maximaal één openstaande reservering hebben voor de donderdag- en zaterdagavond, na afloop kun je
        direct weer een nieuwe reservering maken. Zo zorgen we ervoor dat iedereen af en toe langs kan komen`,
        'Een reservering verplaatsen kan door te annuleren via de bevestigingsmail en een nieuwe reservering te maken',
        'Tweepersoonsplekken zijn bedoeld voor mensen uit hetzelfde huishouden',
        `Als er geen tweepersoonsplekken meer beschikbaar zijn en je wilt wel met twee personen komen, dan kun je twee
        maal individueel reserveren. Mits mogelijk kun je alsnog bij elkaar gaan zitten`
      ],
      rules_disclaimer: `
        We begrijpen dat bovenstaande regels niet voor iedereen het meest ideaal zullen zijn. Zodra het kan en waar
        nodig zullen we de regels aanpassen om het voor iedereen zo leuk mogelijk te maken. Suggesties zijn altijd
        welkom via de contactgegevens onderaan deze pagina.
      `
    },
    form: {
      title: 'Reserveren',
      ggd_consent: `
        Ik geef toestemming om mijn gegevens te delen met de GGD wanneer deze worden opgevraagd ten behoeve van een
        bron- en contactonderzoek.
      `,
      seats: {
        one_person_seat: 'Eenpersoonszitplaats',
        two_person_seat: 'Tweepersoonszitplaats',
        within_distance: '(binnen 1,5 meter)',
        unavailable: 'Niet meer beschikbaar'
      },
      time_slot: `Tijdslot`,
      seat_type: `Type Zitplek`,
      soon: `
        Het is binnenkort mogelijk om via deze pagina je reservering te plaatsen. Tot snel!
      `,
      thank_you: `
        Bedankt voor het reserveren! Je ontvangt een e-mail met je reserveringsbewijs. Lukt het je uiteindelijk toch
        niet om aanwezig te zijn? Via de mail die je ontvangt kun je je reservering annuleren.
      `,
      disclaimer: `
        Bij het verzenden van dit formulier geef je DWH toestemming om je gegevens op te slaan en te verwerken. Je 
        gegevens worden alleen gebruikt voor het controleren van reserveringen en voor de mogelijkheid om contact
        met je op te nemen. Neem voor vragen contact op via onderstaande contactgegevens.
      `,
      oops: 'Oeps.',
      validation: {
        A_guest_can_only_have_one_open_booking: `
          Je hebt al een actieve reservering voor een event de komende tijd. Je kunt maximaal 1 openstaande
          reservering hebben.
        `
      }
    },
    canceled: `
      Je reservering is geannuleerd. Indien gewenst kun je hieronder een nieuwe reservering plaatsen.
    `,
    general_rules: [
      'Was regelmatig je handen',
      'Hoest en nies in je elleboog',
      'Betaal contactloos met je telefoon of pinpas',
      'Schud geen handen en sla de knuffels over',
      'Houd 1,5 meter afstand tot anderen',
      'Heb je klachten? Blijf thuis!'
    ]
  },
  remembrance_day: {
    title: 'Kranslegging DWH',
    title_label: 'Dodenherdenking 2020',
    description: `
      Op 4 mei herdenken we samen alle slachtoffers van oorlogen. Dit jaar is anders dan andere jaren. Misschien bezocht
      je net als velen van ons elk jaar de lokale herdenking met familie of vrienden, dit jaar is het echter niet veilig
      om fysiek samen te zijn. Daarom staan we op deze website stil bij alle Nederlanders die tijdens de Tweede
      Wereldoorlog zijn omgekomen of vermoord en alle Nederlanders die hierna zijn omgekomen in oorlogssituaties of
      vredesmissies. We vragen je samen met ons stil te staan door je aan te sluiten bij onze virtuele kranslegging.
      <br />
      <br />
      Wij willen hier in het bijzonder stilstaan bij de onderdrukking en vervolging van LHBT+’ers over de hele wereld,
      tijdens en ook na de Tweede Wereldoorlog. De oorlog heeft er ook een grote rol in gespeeld. Hoewel in Nederland
      weinig LHBT+’ers direct vervolgd werden, werden de eerste stappen in de emancipatie van LHBT+’ers teniet gedaan.
      Zo werd de eerste transgenderkliniek ter wereld, in Berlijn, vernietigd en werden alle archieven verbrand. De
      wereld zou tot de jaren ‘70 moeten wachten op een tweede kliniek.<br />
      <br />
      Stilstaan bij deze geschiedenis is ook een aansporing om waakzaam te blijven. We zijn trots op het
      vooruitstrevende land waar we in leven, maar we moeten in gedachte houden dan vooruitgang en emancipatie niet
      vanzelfsprekend zijn. Een terugval kan plaatsvinden als onze aandacht verslapt.<br />
      <br />
      Hierin kunnen we ook niet egoïstisch zijn. Onze vrijheid om te zijn wie we zijn en lief te hebben wie we
      liefhebben hangt, zo leert de geschiedenis, samen met de vrijheid van anderen om op hun manier zichzelf te zijn.
      Vrijheid heb je alleen samen. Hetzelfde is terug te zien in de huidige crisis: we kunnen het alleen samen. Laten
      we samen stilstaan bij het verleden en het heden en deze les ook na deze crisis niet vergeten.
    `,
    wreath_laying: {
      title: 'Leg samen een virtuele krans',
      description: `
        Dit jaar hebben wij niet de mogelijkheid om een fysieke krans te leggen, daarom vragen we jou om samen met ons
        een virtuele krans te leggen. Hieronder zie je de virtuele kransleggers waar jij je bij aansluit.
      `,
      board_label_dwh: 'Bestuur DWH',
      board_label_outsite: 'Bestuur Outsite'
    },
    form: {
      title: 'Virtuele krans leggen',
      thank_you: 'Bedankt! Het is niet meer mogelijk deel te nemen.',
      disclaimer: `
        Bij het verzenden van dit formulier geef je DWH toestemming om je naam op deze pagina te publiceren. Na afloop
        van de actie zullen je gegevens worden verwijderd. Neem voor vragen contact op via onderstaande gegevens.
      `
    },
    video_description: `
      Vorig jaar, in 2019, legden toenmalig DWH-voorzitter Michel Fleur en toenmalig Outsite-voorzitter Casper Boone
      bloemen tijdens dodenherdenking in Delft namens DWH.
    `
  }
}
