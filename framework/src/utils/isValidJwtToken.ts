const jwtTokenRegex = /^[0-9A-Za-z-_]+\.[0-9A-Za-z-_]+\.[0-9A-Za-z-_]+$/u

const isValidJwtToken = (token: string): boolean => {
  return jwtTokenRegex.test(token)
}

export {
  isValidJwtToken,
}
