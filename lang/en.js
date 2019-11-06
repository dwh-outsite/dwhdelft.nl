import barbuddies from '~/lang/en_barbuddies.js'

export default {
  hero: {
    title: 'DWH LGBT+ society',
    subtitle: "Delft's society for queer people",
    leftButton: 'Join DWH',
    rightButton: 'Watch video'
  },
  description: {
    text: `DWH is the independent LGBT+ association of Delft and surroundings. We're two things, a meeting place for
      LGBT+ people and their friends and a group that actively pushes for greater LGBT+ rights and acceptance. As the
      latter, we give lectures at schools, have introduction groups for newly out people and organise public events
      arounds dates like coming out day.
      <br>
      <br>
      As a meeting place we are open regularly on four nights a week with a weekly dinner, movie night and two bar
      nights. We also organise all sorts of activities throughout the year: queer dance parties every other month,
      beer tastings, workshops, pub crawls and even vacations. See our upcoming events below!`,
    invitation: 'Come by during one of our bar nights:<br> <strong>Every Friday starting at 22:00</strong>'
  },
  activities: {
    title: 'Upcoming activities',
    defaults: {
      bar: {
        banner_title: 'Weekly bar night',
        banner_subtitle: 'Open for everyone',
        title: 'Bar Night',
        date: 'Every Friday from 10pm'
      },
      eating_out: {
        banner_title: 'Weekly dinner',
        banner_subtitle: 'Members only, registration required',
        title: 'EatingOUT',
        date: 'Every Tuesday at 7pm'
      }
    }
  },
  ways_to_join: {
    title: 'Ready to check out <strong>DWH</strong>?',
    description: `You're always welcome on a Friday night during a bar night. Do you think this is too exciting or
    frightening? Then you can make use of our bar buddy system!`,
    outsite_hint: `Are you 28 years or younger? Take a look at
      <a href="https://outsite.nl/" class="font-bold">Outsite</a>, the youth division of our association.`,
    bar_buddy: {
      title: 'Bar Buddy System',
      description: `If you are looking to come by on a Friday night but you are not yet familiar with the society you
        can make use of the bar buddy system! A bar buddy is someone who can not only tell you all there is to know
        about DWH but they can also introduce you to new people.`,
      sign_up: 'Sign up for a bar buddy',
      action: 'Find a bar buddy',
      meet_up_with: 'Meet up with',
      barbuddies_title: 'Our <strong>Bar Buddies</strong>',
      read_more: 'Read more',
      read_less: 'Collapse'
    }
  },
  video: {
    title: '<strong>DWH</strong> in 120 seconds'
  },
  forms: {
    label: {
      name: 'How should we call you?',
      email: 'Email address',
      language: 'Language',
      languages: {
        dutch: 'Dutch',
        english: 'English',
        no_preference: 'No preference'
      },
      remarks: 'Do you have any further questions?',
      date_of_birth: 'Date of birth',
      phone_number: 'Phone number',
      residence: 'City of residence',
      pronouns: 'Pronouns',
      barbuddy: 'Who would you like to meet?'
    },
    placeholder: {
      name: 'Name',
      email: 'Email address',
      remarks: 'Remarks or questions',
      date_of_birth: 'Date of birth',
      phone_number: 'Phone number',
      residence: 'City name',
      pronouns: 'e.g. she/her, he/him, they/them'
    },
    buttons: {
      sign_up: 'Sign up',
      loading: 'Loading'
    },
    success: {
      heading: 'The form has been submitted successfully',
      barbuddy: 'The bar buddy you selected will contact you as soon as possible.'
    }
  },
  footer: {
    newsletter: {
      description: 'Stay up to date, subscribe to the <strong>DWH newsletter</strong>',
      button: 'Subscribe now'
    },
    leftTitle: 'Board',
    rightTitle: 'Contact',
    board: {
      president: 'President',
      secretary: 'Secretary',
      treasurer: 'Treasurer',
      youth: 'Commissioner Youth',
      general: 'Comissioner'
    }
  },
  barbuddies
}
