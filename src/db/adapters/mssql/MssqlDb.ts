import { getTls } from '../../../tls/getTls.js'
import { Db } from '../../Db.js'
import type { Tls } from '../../../tls/Tls.js'
import type { Initializer } from '../../Initializer.js'

class MssqlDb extends Db {
  public constructor(params: {
    host: string,
    port?: number,
    tls?: Tls,
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
    onLog?: (message: string) => void,
  }) {
    const tls = getTls(params.tls)

    super({
      options: {
        dialect: 'mssql',
        dialectOptions: {
          options: {
            cryptoCredentialsDetails: tls,
            trustServerCertificate: tls?.rejectUnauthorized ?? false,
            connectTimeout: params.connectionTimeout ?? 15000,
          },
        },
        host: params.host,
        port: params.port ?? 1433,
        username: params.user,
        password: params.password,
        database: params.database,
        pool: {
          min: params.minConnections ?? 0,
          max: params.maxConnections ?? 5,
          acquire: params.connectionAcquireTimeout ?? 30000,
          idle: params.connectionIdleTimeout ?? 30000,
          evict: params.connectionEvictInterval ?? 30000,
          maxUses: params.connectionMaxUses ?? 100,
        },
        logging: params.onLog,
      },
      initializers: params.initializers,
    })
  }
}

export {
  MssqlDb,
}
