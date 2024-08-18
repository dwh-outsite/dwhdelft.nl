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
    if (typeof data !== 'object') {
      return false
    }

    const rtableInProduction = ['t', 'b'].every((key) => key in data)

    const rtableInDevelopment = ['type', 'start', 'end', 'loc', 'body'].every((key) => key in data)

    return rtableInProduction || rtableInDevelopment
  }


  const forgivingT = (key, ...args) => {
    const value = t(key, ...args)

    if (value === key) {
      const objectValue = tm(key, ...args)

      const unpackedObjectValue = unpack(objectValue)

      if (Object.keys(unpackedObjectValue).length === 0) {
        console.warn(`Missing translation for key: ${key}`)
        return key
      }

      return unpackedObjectValue
    }

    return value
  }

  const tt = (data) => data[locale.value]

  return { t: forgivingT, tt, locale, originalT: t }
}
