import { BaseError } from '../../error/BaseError.js'

class ParallelismError extends BaseError {
  public constructor(parallelism: number) {
    super(`invalid parallelism "${parallelism}"`)
  }
}

export {
  ParallelismError,
}
