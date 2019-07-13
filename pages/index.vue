<template>
  <div>
    <nav class="absolute z-50 w-full mt-8">
      <div class="container mx-auto flex justify-between">
        <img src="icon.png" alt="Outsite" class="w-10 h-10" />
        <div>
          <nuxt-link to="/" class="text-white text-xl font-semibold no-underline mr-4">
            Home
          </nuxt-link>
          <nuxt-link to="/ander" class="text-white text-xl font-semibold no-underline mr-4">
            EatingOUT
          </nuxt-link>
          <nuxt-link to="/ander" class="text-white text-xl font-semibold no-underline mr-4">
            Commissies
          </nuxt-link>
          <nuxt-link to="/ander" class="text-white text-xl font-semibold no-underline mr-4">
            Kennismakingsgroep
          </nuxt-link>
        </div>
        <div>
          <a href="/dwh" class="text-white text-xl font-semibold no-underline mr-4">
            DWH
          </a>
        </div>
      </div>
    </nav>
    <header class="relative">
      <div class="hero"></div>
      <div class="relative flex items-center h-full">
        <div class="container mx-auto">
          <h1 class="text-4xl text-white font-normal">
            LHBT+ jongerenvereniging
          </h1>
          <h2 class="text-2xl text-white mt-2 w-1/2 font-light">
            Een krachtige tagline om dat kracht bij te zetten. Leuk voor iedereen.
          </h2>
        </div>
      </div>
    </header>
    <section>
      <div class="container mx-auto py-16 flex">
        <div class="flex-1 w-1/2">
          <p class="text-2xl leading-normal text-grey-darkest">
            Outsite is de jongerenafdeling van de DWH (Delftse Werkgroep Homoseksualiteit). Wij zijn er voor iedereen
            onder de 28 jaar die zich identificeert als LHBT+. Wij organiseren allerlei soorten activiteiten, van
            borrelen op de donderdag tot grootse kwartaalfeesten en uitgaan in bijvoorbeeld Amsterdam, allemaal mogelijk
            gemaakt door onze fantastische commissies en leden! De voornaamste manier om kennis te maken met de
            vereniging is door deel te nemen aan de kennismakingsgroep (KMG) of door gebruik te maken van het bar buddy
            systeem.
          </p>
        </div>
        <div class="flex-1 w-1/2">
          <div
            class="
              rounded border-8 border-pink-200 mx-32 text-center uppercase text-4xl font-bold tracking-wide -mt-24"
          >
            <div class="bg-pink-200 text-white py-2">
              Elke Donderdag
            </div>
            <div class="border-t-8 border-b-8 border-pink-200 text-5xl text-pink-200">
              22:00
              <small class="text-sm block">Dit lelijke ding gaat weg</small>
            </div>
            <div class="bg-pink-200 text-white py-2">
              Open Baravond
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="information">
      <div class="container mx-auto pt-24 pb-16">
        <div class="text-center">
          <h1 class="tracking-wide font-semibold uppercase text-2xl mb-12 mx-2">
            Aankomende activiteiten
          </h1>
        </div>
        <div class="flex justify-center mt-4">
          <div class="bg-white rounded shadow flex-1 mx-2">
            <img src="act_1.jpg" class="rounded-t" />
            <div class="p-4 pt-3">
              <h3 class="text-pink-400 text-xl font-bold">CraySea in Love</h3>
              <span class="text-gray-500">March 7, 2019 at 10 PM – 4 AM</span>
            </div>
          </div>
          <div class="bg-white rounded shadow flex-1 mx-2">
            <img src="act_2.jpg" class="rounded-t" />
            <div class="p-4 pt-3">
              <h3 class="text-pink-400 text-xl font-bold">Nowee 2019: Karaoke</h3>
              <span class="text-gray-500">April 4, 2019 at 9 PM – 2 AM</span>
            </div>
          </div>
          <div class="bg-white rounded shadow flex-1 mx-2">
            <img src="act_3.jpg" class="rounded-t" />
            <div class="p-4 pt-3">
              <h3 class="text-pink-400 text-xl font-bold">Board Interest Drink</h3>
              <span class="text-gray-500">
                March 28, 2019 at 10 PM – 12 AM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-pink-200 bg-hero-falling-triangles w-full py-8">
      <div class="container mx-auto">
        <div class="text-center mb-4">
          <h1 class="text-white font-medium text-5xl">Kennismaken met <strong>Outsite</strong>?</h1>
        </div>
        <div class="flex justify-center">
          <div class="bg-white rounded shadow p-8 flex-1 mx-2">
            <h2 class="text-xl font-bold">Kennismakingsgroep</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad at odio eligendi corporis sit iste, assumenda
              facere voluptatum, veniam necessitatibus recusandae quia alias. Eveniet voluptatem veritatis ratione.
              Nesciunt, inventore molestiae?
            </p>
          </div>
          <div class="bg-white rounded shadow p-8 flex-1 mx-2">
            <h2 class="text-xl font-bold">Bar buddy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad at odio eligendi corporis sit iste, assumenda
              facere voluptatum, veniam necessitatibus recusandae quia alias. Eveniet voluptatem veritatis ratione.
              Nesciunt, inventore molestiae?
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      Insta foto'
    </section>
    <section>
      Outsite bestuur
    </section>
    <footer>
      tt
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

header {
  height: calc(190px * 4);
}

.hero {
  @apply bg-pink-400 absolute w-full h-full;
  transform: skewY(-13deg);
  transform-origin: 0;
}

.information {
  @apply relative;
}

.information::before {
  @apply bg-gray-200 absolute w-full;
  height: 250%;
  transform: skewY(-13deg);
  content: '';
  z-index: -1;
  top: 0px;
}
</style>
