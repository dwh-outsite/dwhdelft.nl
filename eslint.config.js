import dpgRadioVue3 from '@dpgradio/eslint-config-vue3'
import tailwind from 'eslint-plugin-tailwindcss'

export default [
  {
    ignores: ['**/.nuxt/', '**/.output/'],
  },
  ...dpgRadioVue3,
  ...tailwind.configs['flat/recommended'],
  { rules: { 'no-undef': 'off' } },
]
