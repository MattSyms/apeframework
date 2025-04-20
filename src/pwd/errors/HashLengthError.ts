import { BaseError } from '../../error/BaseError.js'

class HashLengthError extends BaseError {
  public constructor(hashLength: number) {
    super(`invalid hash length "${hashLength}"`)
  }
}

export {
  HashLengthError,
}
