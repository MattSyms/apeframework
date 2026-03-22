class BaseError extends Error {
  public constructor(message: string) {
    super(message)
    this.name = new.target.name
    Error.captureStackTrace(this, new.target)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export {
  BaseError,
}
