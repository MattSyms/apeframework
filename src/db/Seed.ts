import type { Sequelize } from 'sequelize'

type Seed = (db: Sequelize) => Promise<void>

export {
  type Seed,
}
