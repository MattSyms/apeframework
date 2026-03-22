import { BaseError } from '../../error/BaseError.js'

class PropertyNameError extends BaseError {
  public constructor(name: string) {
    super(`invalid property name "${name}"`)
  }
}

export {
  PropertyNameError,
}
