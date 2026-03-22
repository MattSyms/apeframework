const capitalLetterRegex = /[A-Z]/gu

const capitalLetterReplacer = (letter: string): string => {
  return `_${letter}`
}

const getPropertyEnvVar = (name: string): string => {
  return name
    .replace(capitalLetterRegex, capitalLetterReplacer)
    .toUpperCase()
}

export {
  getPropertyEnvVar,
}
