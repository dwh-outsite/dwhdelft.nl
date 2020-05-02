<template>
  <!-- <div class="w-1/3 bg-white p-8 rounded-lg shadow-xl absolute -top-40 z-50"> -->
  <div class="bg-white p-8 rounded-lg shadow-xl">
    <div class="rounded-full w-16 h-16 p-5 bg-purple-500 mb-8 text-white">
      <Zondicon icon="location-food" class="fill-current" />
    </div>

    <h2 class="text-xl font-bold mb-4 text-purple-500 uppercase tracking-wider">
      Aanmelden EatingOUT
    </h2>

    <p class="form-element-gray">
      <label>{{ $t('forms.label.name') }}</label>
      <input v-model="form.name" :placeholder="$t('forms.placeholder.name')" type="text" class="bg-gray-200" />
    </p>

    <p class="form-element-gray">
      <label>{{ $t('forms.label.email') }}</label>
      <input v-model="form.email" :placeholder="$t('forms.placeholder.email')" type="text" class="bg-gray-200" />
    </p>

    <div class="form-element-gray">
      <label>Team</label>
      <div class="flex flex-wrap -mx-1">
        <div v-for="team in teams" :key="team" class="w-1/2 p-1">
          <div
            @click="form.team = team"
            v-text="team"
            :class="[
              team === form.team ? 'bg-purple-400 text-white' : 'hover:bg-purple-200',
              'bg-purple-100 rounded px-3 py-2 tracking-wider flex items-center cursor-pointer'
            ]"
          />
        </div>
      </div>
    </div>

    <div class="mb-4">
      <label class="form-element-label">I don't eat...</label>
      <div class="flex flex-wrap -m-1">
        <div
          v-for="restriction in restrictions"
          :key="restriction"
          v-text="restriction"
          @click="toggleRestriction(restriction)"
          :class="[
            form.restrictions.includes(restriction) ? 'bg-purple-400 text-white' : 'hover:bg-purple-200',
            'bg-purple-100 rounded px-2 py-1 tracking-wider flex-1 text-center m-1 cursor-pointer'
          ]"
        />
        <div
          :class="[
            form.otherRestriction.length > 0 ? 'bg-purple-400 text-white' : 'hover:bg-purple-200',
            'bg-purple-100 rounded px-1 py-1 tracking-wider flex-1 flex items-center m-1 cursor-pointer'
          ]"
        >
          <span class="px-1 inline">Other:</span>
          <input
            v-model="form.otherRestriction"
            type="text"
            class="ml-1 rounded px-2 w-56 inline text-black text-sm h-full"
            placeholder="Other Restrictions"
          />
        </div>
      </div>
    </div>

    <p class="form-element-gray">
      <label>{{ $t('forms.label.remarks') }}</label>
      <textarea v-model="form.remarks" :placeholder="$t('forms.placeholder.remarks')"></textarea>
    </p>

    <button class="block button-pink">
      {{ $t('forms.buttons.sign_up') }}
    </button>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  data() {
    return {
      form: {
        name: '',
        email: '',
        team: '',
        restrictions: [],
        otherRestriction: '',
        remarks: ''
      },
      teams: ['🍝 Kitchen Helpers', '⏰ In a hurry', '🧽 Washing up', '👩‍🍳 Cookies'],
      restrictions: ['Meat', 'Fish', 'Seafood', 'Cheese', 'Nuts', 'Dairy']
    }
  },
  methods: {
    toggleRestriction(restriction) {
      if (this.form.restrictions.includes(restriction)) {
        this.form.restrictions.splice(this.form.restrictions.indexOf(restriction), 1)
      } else {
        this.form.restrictions.push(restriction)
      }
    }
  }
}
</script>
