import { BaseError } from '../../error/BaseError.js'

class EventGeolocationError extends BaseError {
  public constructor(latitude: number, longitude: number) {
    super(`invalid event geolocation "${latitude}, ${longitude}"`)
  }
}

export {
  EventGeolocationError,
}
