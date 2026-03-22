const isValidUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url)

    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return false
    }

    if (!url.startsWith(`${parsed.protocol}//`)) {
      return false
    }

    return true
  } catch (error) {
    return false
  }
}

export {
  isValidUrl,
}
