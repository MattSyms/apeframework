import { BaseError } from '../../../../error/BaseError.js'

class FileInitError extends BaseError {
  public constructor(path: string, message: string) {
    super(`failed initializing file "${path}": ${message}`)
  }
}

export {
  FileInitError,
}
