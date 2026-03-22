import { Logger } from '../../Logger.js'

class NoopLogger extends Logger {
  public trace(): void { }

  public debug(): void { }

  public info(): void { }

  public warn(): void { }

  public error(): void { }

  public fatal(): void { }

  public async close(): Promise<void> { }
}

export {
  NoopLogger,
}
