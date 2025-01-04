import dpgRadioVue3 from '@dpgradio/eslint-config-vue3'

export default [
  {
    ignores: ['**/.nuxt/', '**/.output/'],
  },
  ...dpgRadioVue3,
  { rules: { 'no-undef': 'off' } },
]
