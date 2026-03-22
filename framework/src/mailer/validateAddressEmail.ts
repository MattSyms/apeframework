import { isValidEmail } from '../utils/isValidEmail.js'
import { AddressEmailError } from './errors/AddressEmailError.js'

const validateAddressEmail = (email: string): void => {
  if (!isValidEmail(email)) {
    throw new AddressEmailError(email)
  }
}

export {
  validateAddressEmail,
}
