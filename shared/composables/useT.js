export const useT = (options = {}) => {
  const { t, tm, rt, locale } = useI18n({ useScope: 'local', ...options })

  function unpack(data) {
    if (isRtableObject(data)) {
      return rt(data)
    }

    if (Array.isArray(data)) {
      return data.map(unpack)
    }

    if (typeof data !== 'object') {
      return data
    }

    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => {
        return [key, unpack(value)]
      })
    )
  }

  function isRtableObject(data) {
    return ['type', 'start', 'end', 'loc', 'body'].every((key) => key in data)
  }


  const forgivingT = (key, ...args) => {
    const value = t(key, ...args)

    if (value === key) {
      const objectValue = tm(key, ...args)

      return unpack(objectValue)
    }

    return value
  }

  const tt = (data) => data[locale.value]

  return { t: forgivingT, tt, locale }
}
