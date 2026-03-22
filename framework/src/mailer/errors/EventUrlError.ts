import { BaseError } from '../../error/BaseError.js'

class EventUrlError extends BaseError {
  public constructor(url: string) {
    super(`invalid event url "${url}"`)
  }
}

export {
  EventUrlError,
}
