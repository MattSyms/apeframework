import { BaseError } from '../../error/BaseError.js'

class AddressEmailError extends BaseError {
  public constructor(email: string) {
    super(`invalid address email "${email}"`)
  }
}

export {
  AddressEmailError,
}
