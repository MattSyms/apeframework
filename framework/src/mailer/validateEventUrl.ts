import { isValidUrl } from '../utils/isValidUrl.js'
import { EventUrlError } from './errors/EventUrlError.js'

const validateEventUrl = (url: string): void => {
  if (!isValidUrl(url)) {
    throw new EventUrlError(url)
  }
}

export {
  validateEventUrl,
}
