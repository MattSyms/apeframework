import type { QueryInterface } from 'sequelize'

interface Migration {
  up: (db: QueryInterface) => Promise<void>,
  down: (db: QueryInterface) => Promise<void>,
}

export {
  type Migration,
}
