import { BaseError } from '../../error/BaseError.js'

class DecryptError extends BaseError {
  public constructor(message: string) {
    super(`failed decrypting string: ${message}`)
  }
}

export {
  DecryptError,
}
