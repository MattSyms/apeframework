import { BaseError } from '../../error/BaseError.js'

class MemoryCostError extends BaseError {
  public constructor(memoryCost: number) {
    super(`invalid memory cost "${memoryCost}"`)
  }
}

export {
  MemoryCostError,
}
