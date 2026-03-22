import { BaseError } from '../../error/BaseError.js'

class SecretLengthError extends BaseError {
  public constructor() {
    super('invalid secret length')
  }
}

export {
  SecretLengthError,
}
