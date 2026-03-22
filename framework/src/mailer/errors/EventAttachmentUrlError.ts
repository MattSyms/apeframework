import { BaseError } from '../../error/BaseError.js'

class EventAttachmentUrlError extends BaseError {
  public constructor(url: string) {
    super(`invalid event attachment url "${url}"`)
  }
}

export {
  EventAttachmentUrlError,
}
