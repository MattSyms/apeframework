import { Sequelize } from 'sequelize'
import type { Initializer } from './Initializer.js'
import type { Options } from 'sequelize'

abstract class Db extends Sequelize {
  protected constructor(params: {
    options: Options,
    initializers?: Initializer[],
  }) {
    super(
      {
        ...params.options,
        define: {
          freezeTableName: true,
          timestamps: false,
        },
      },
    )

    params.initializers?.forEach((initialize) => {
      initialize(this)
    })
  }
}

export {
  Db,
}
