import { Sequelize } from 'sequelize'
import type { Db } from '../../Db.js'
import type { Initializer } from '../../Initializer.js'
import type { LogHandler } from '../../LogHandler.js'

class MysqlDb extends Sequelize implements Db {
  public constructor(params: {
    host: string,
    port?: number,
    user: string,
    password: string,
    database: string,
    maxConnections?: number,
    initializers?: Initializer[],
    onLog?: LogHandler,
  }) {
    super(
      params.database,
      params.user,
      params.password,
      {
        dialect: 'mysql',
        host: params.host,
        port: params.port ?? 3306,
        pool: {
          max: params.maxConnections ?? 5,
        },
        define: {
          freezeTableName: true,
          timestamps: false,
        },
        logging: params.onLog,
      },
    )

    params.initializers?.forEach((initialize) => {
      initialize(this)
    })
  }
}

export {
  MysqlDb,
}
