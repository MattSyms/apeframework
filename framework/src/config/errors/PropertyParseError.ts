import { BaseError } from '../../error/BaseError.js'

class PropertyParseError extends BaseError {
  public constructor(name: string, source: string, message: string) {
    super(`failed parsing property "${name}" from ${source}: ${message}`)
  }
}

export {
  PropertyParseError,
}
