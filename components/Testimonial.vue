<i18n lang="yaml">
en:
  read_more: Read more
nl:
  read_more: Lees meer
</i18n>

<template>
  <div class="mx-auto container">
    <div
      class="
        md:hidden
        mx-auto bg-white relative
        bg-hero-falling-triangles pb-6
      "
    >
      <div v-for="(testimonial, index) in testimonials" :key="index">
        <transition name="slide-right">
          <div v-show="index === active" class="absolute w-full text-center">
            <div class="w-32 h-32 rounded-full overflow-hidden -mt-16 mx-auto">
              <img :src="requireImage(testimonial.name)" class="object-cover h-full" />
            </div>
            <div class="bg-white-gradient-vertical">
              <div>
                <div v-text="testimonial.name" class="uppercase tracking-wide font-bold text-brand-400 mr-1" />
                <div v-text="testimonial[`author_description_${$i18n.locale}`]" class="text-gray-500 italic" />
              </div>
              <div class="flex px-6 pb-6 leading-snug">
                <div class="absolute text-mega text-brand-100 -ml-6 -mt-20 pt-2 z-0">“</div>
                <div v-text="testimonial[`quote_${$i18n.locale}`]" class="text-xl z-20 pt-2" />
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="h-64 w-full">
        <div class="px-6 w-full flex justify-end -mt-16 absolute">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            @click="setActive(index)"
            :class="index === active ? 'bg-gray-400' : 'bg-gray-300'"
            class="rounded-full w-2 h-2 mr-1 cursor-pointer"
          />
        </div>
      </div>
    </div>

    <div
      class="
        hidden md:block
        mx-auto rounded-full bg-white shadow-lg relative overflow-hidden w-2/3
        bg-hero-falling-triangles
      "
    >
      <div v-for="(testimonial, index) in testimonials" :key="index">
        <transition name="slide-right">
          <div v-show="index === active" class="absolute flex">
            <div class="w-32 h-32 rounded-full mr-5 overflow-hidden m-6">
              <img :src="requireImage(testimonial.name)" class="object-cover h-full" />
            </div>
            <div class="flex-1 bg-white-gradient mr-12">
              <div class="flex-1 flex flex-col justify-between relative p-3 my-6">
                <div class="absolute text-mega text-brand-100 -ml-6 -mt-20 pt-2 z-0">“</div>
                <div class="text-xl z-10 pt-2">
                  {{ testimonial[`quote_${$i18n.locale}`] }}
                  <a :href="localePath('testimonials')" class="text-brand-500">
                    {{ $t('read_more') }} &raquo;
                  </a>
                </div>
                <div>
                  <span v-text="testimonial.name" class="uppercase tracking-wide font-bold text-brand-400 mr-1" />
                  <span v-text="testimonial[`author_description_${$i18n.locale}`]" class="text-gray-500 italic" />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="h-32 m-6 w-full flex items-end justify-right">
        <div class="flex-1" />
        <div class="flex pb-4 pr-24 z-20">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            @click="setActive(index)"
            :class="index === active ? 'bg-gray-400' : 'bg-gray-300'"
            class="rounded-full w-2 h-2 mr-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const INTERVAL_TIME = 5000

export default {
  props: ['testimonials'],
  data() {
    return {
      active: 0,
      interval: undefined,
    }
  },
  mounted() {
    this.startSliding()
  },
  methods: {
    setActive(index) {
      this.stopSliding()
      this.active = index
      this.startSliding()
    },
    startSliding() {
      this.interval = setInterval(() => {
        this.active = (this.active + 1) % this.testimonials.length
      }, INTERVAL_TIME)
    },
    stopSliding() {
      clearInterval(this.interval)
    },
    requireImage(name) {
      try {
        return require(`#/assets/images/photos/testimonials/${name.toLowerCase()}.png`)
      } catch (e) {
        return require(`#/assets/images/photos/testimonials/default.png`)
      }
    },
  },
}
</script>

<style scoped>
.bg-white-gradient {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 1) 90%,
    rgba(255, 255, 255, 0) 100%
  );
}

.bg-white-gradient-vertical {
  background: rgb(255, 255, 255);
  background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 25%);
}

.slide-right-enter-active {
  animation: slideInRight 2s forwards;
}

.slide-right-leave-active {
  animation: slideOutLeft 2s forwards;
}

@keyframes slideInRight {
  0% {
    transform: translateX(400px);
  }
  100% {
    transform: translateX(0);
  }
}

@screen md {
  @keyframes slideInRight {
    0% {
      transform: translateX(1000px);
    }
    100% {
      transform: translateX(0);
    }
  }
}

@keyframes slideOutLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-400px);
  }
}

@screen md {
  @keyframes slideOutLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1000px);
    }
  }
}
</style>
