import { getTls } from '../../../tls/getTls.js'
import { Db } from '../../Db.js'
import type { Tls } from '../../../tls/Tls.js'
import type { Initializer } from '../../Initializer.js'

class PostgresDb extends Db {
  public constructor(params: {
    host: string,
    port?: number,
    tls?: Tls | boolean,
    user: string,
    password: string,
    database: string,
    minConnections?: number,
    maxConnections?: number,
    connectionTimeout?: number,
    connectionAcquireTimeout?: number,
    connectionIdleTimeout?: number,
    connectionEvictInterval?: number,
    connectionMaxUses?: number,
    initializers?: Initializer[],
    onQuery?: (message: string) => void,
  }) {
    super({
      options: {
        dialect: 'postgres',
        dialectOptions: {
          ssl: typeof params.tls === 'boolean'
            ? params.tls
            : getTls(params.tls),
          connectionTimeoutMillis: params.connectionTimeout ?? 10000,
        },
        host: params.host,
        port: params.port ?? 5432,
        username: params.user,
        password: params.password,
        database: params.database,
        pool: {
          min: params.minConnections ?? 0,
          max: params.maxConnections ?? 10,
          acquire: params.connectionAcquireTimeout ?? 30000,
          idle: params.connectionIdleTimeout ?? 30000,
          evict: params.connectionEvictInterval ?? 30000,
          maxUses: params.connectionMaxUses ?? 100,
        },
        logging: params.onQuery,
      },
      initializers: params.initializers,
    })
  }
}

export {
  PostgresDb,
}
