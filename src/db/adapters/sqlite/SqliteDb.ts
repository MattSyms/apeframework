import SQLite from 'sqlite3'
import { Db } from '../../Db.js'
import type { Initializer } from '../../Initializer.js'

class SqliteDb extends Db {
  public constructor(params: {
    storage: string,
    initializers?: Initializer[],
    onLog?: (message: string) => void,
  }) {
    super({
      options: {
        dialect: 'sqlite',
        dialectOptions: {
          mode: SQLite.OPEN_FULLMUTEX
            | SQLite.OPEN_READWRITE
            | SQLite.OPEN_CREATE,
        },
        storage: params.storage,
        logging: params.onLog,
      },
      initializers: params.initializers,
    })
  }
}

export {
  SqliteDb,
}
