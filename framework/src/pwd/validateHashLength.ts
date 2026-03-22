import { HashLengthError } from './errors/HashLengthError.js'

const validateHashLength = (hashLength?: number): void => {
  if (hashLength && hashLength < 4) {
    throw new HashLengthError(hashLength)
  }
}

export {
  validateHashLength,
}
