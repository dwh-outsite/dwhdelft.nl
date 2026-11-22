// Docs: https://content.dwhdelft.nl/api/v1/docs.md
const OPENING_HOURS_URL = 'https://content.dwhdelft.nl/api/v1/opening-hours'

const fetchOpeningHours = async () => (await $fetch(OPENING_HOURS_URL)).opening_hours

let clientFetch = null

/**
 * The recurring opening nights (EatingOUT, MIXUP, ...) as managed in the DWH content manager.
 *
 * The content manager is the source of truth: the opening hours are always fetched live in the browser when a page
 * is visited. The snapshot taken while statically generating the site only serves as the initial render (so the
 * hours are in the HTML for search engines and there is no empty flash), and is replaced as soon as the live data
 * comes in.
 *
 * Each item has a localized `day`, `description` and optional `announcement` and `link.name` (use `tt`),
 * an ISO `weekday` (1 = Monday, 7 = Sunday), `monthly`, `start_time` and `end_time`, and `restrictions`.
 */
export const useOpeningHours = async () => {
  const asyncData = useAsyncData('opening-hours', fetchOpeningHours, { default: () => [] })

  onMounted(async () => {
    clientFetch ??= fetchOpeningHours()

    try {
      asyncData.data.value = await clientFetch
    } catch (error) {
      clientFetch = null
      console.error('Could not load the opening hours from the content manager.', error)
    }
  })

  const { data, error } = await asyncData

  if (error.value) {
    console.warn('Could not prerender the opening hours, they will be loaded in the browser instead.', error.value)
  }

  return data
}
