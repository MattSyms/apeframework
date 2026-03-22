import { BaseError } from '../../error/BaseError.js'

class FileReadError extends BaseError {
  public constructor(path: string, message: string) {
    super(`failed reading file "${path}": ${message}`)
  }
}

export {
  FileReadError,
}
