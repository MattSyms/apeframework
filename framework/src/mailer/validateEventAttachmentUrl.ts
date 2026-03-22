import { isValidUrl } from '../utils/isValidUrl.js'
import { EventAttachmentUrlError } from './errors/EventAttachmentUrlError.js'

const validateEventAttachmentUrl = (url: string): void => {
  if (!isValidUrl(url)) {
    throw new EventAttachmentUrlError(url)
  }
}

export {
  validateEventAttachmentUrl,
}
