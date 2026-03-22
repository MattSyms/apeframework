import { randomUUID } from 'crypto'
import { Level } from 'logger/Level.js'
import { FileLogger } from 'logger/adapters/file/FileLogger.js'
import { NoopLogger } from 'logger/adapters/noop/NoopLogger.js'
import { StdioLogger } from 'logger/adapters/stdio/StdioLogger.js'
import type { Logger } from 'logger/Logger.js'

const createLogger = (): Logger => {
  switch (process.env.ADAPTER) {
    case 'file':
      return new FileLogger({
        path: `/tmp/log-${randomUUID()}`,
      })
    case 'noop':
      return new NoopLogger()
    case 'stdio':
      return new StdioLogger({
        level: Level.OFF,
      })
    case undefined:
    default:
      throw new Error('missing or invalid adapter')
  }
}

export {
  createLogger,
}
