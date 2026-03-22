const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/u

const isValidEmail = (email: string): boolean => {
  return emailRegex.test(email)
}

export {
  isValidEmail,
}
