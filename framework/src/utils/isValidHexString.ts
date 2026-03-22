const hexStringRegex = /^[0-9a-f]*$/u

const isValidHexString = (string: string): boolean => {
  return hexStringRegex.test(string)
}

export {
  isValidHexString,
}
