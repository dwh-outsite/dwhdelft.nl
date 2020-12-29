export default {
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
        no_preference: 'Geen voorkeur',
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
      iban: 'IBAN nummer voor betaling via automatisch incasso',
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
      iban: 'IBAN nummer',
    },
    buttons: {
      sign_up: 'Aanmelden',
      submit: 'Verzenden',
      loading: 'Laden',
    },
    success: {
      heading: 'Het formulier is succesvol verstuurd',
      membership: 'We sturen je binnenkort een bevestiging van je lidmaatschap.',
    },
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
      discounted: 'Gereduceerd (€ 25,00)',
    },
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
        maal individueel reserveren. Mits mogelijk kun je alsnog bij elkaar gaan zitten`,
      ],
      rules_disclaimer: `
        We begrijpen dat bovenstaande regels niet voor iedereen het meest ideaal zullen zijn. Zodra het kan en waar
        nodig zullen we de regels aanpassen om het voor iedereen zo leuk mogelijk te maken. Suggesties zijn altijd
        welkom via de contactgegevens onderaan deze pagina.
      `,
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
        unavailable: 'Niet meer beschikbaar',
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
        `,
      },
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
      'Heb je klachten? Blijf thuis!',
    ],
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
      board_label_outsite: 'Bestuur Outsite',
    },
    form: {
      title: 'Virtuele krans leggen',
      thank_you: 'Bedankt! Het is niet meer mogelijk deel te nemen.',
      disclaimer: `
        Bij het verzenden van dit formulier geef je DWH toestemming om je naam op deze pagina te publiceren. Na afloop
        van de actie zullen je gegevens worden verwijderd. Neem voor vragen contact op via onderstaande gegevens.
      `,
    },
    video_description: `
      Vorig jaar, in 2019, legden toenmalig DWH-voorzitter Michel Fleur en toenmalig Outsite-voorzitter Casper Boone
      bloemen tijdens dodenherdenking in Delft namens DWH.
    `,
  },
}
