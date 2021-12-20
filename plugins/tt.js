export default ({ app }, inject) => {
  inject('tt', (languageOptions) => languageOptions[app.i18n.locale])
}
