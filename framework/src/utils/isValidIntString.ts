const intStringRegex = /^[0-9]*$/u

const isValidIntString = (string: string): boolean => {
  return intStringRegex.test(string)
}

export {
  isValidIntString,
}
