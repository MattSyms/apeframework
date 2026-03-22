import { BaseError } from '../../error/BaseError.js'

class TimeCostError extends BaseError {
  public constructor(timeCost: number) {
    super(`invalid time cost "${timeCost}"`)
  }
}

export {
  TimeCostError,
}
