import { BaseError } from '../../error/BaseError.js'

class ParseError extends BaseError {
  public constructor(type: string) {
    super(`failed parsing ${type}`)
  }
}

export {
  ParseError,
}
