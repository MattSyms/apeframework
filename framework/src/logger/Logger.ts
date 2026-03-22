abstract class Logger {
  public abstract trace(message: string, data?: unknown): void

  public abstract debug(message: string, data?: unknown): void

  public abstract info(message: string, data?: unknown): void

  public abstract warn(message: string, data?: unknown): void

  public abstract error(message: string, data?: unknown): void

  public abstract fatal(message: string, data?: unknown): void

  public abstract close(): Promise<void>
}

export {
  Logger,
}
