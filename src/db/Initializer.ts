import type { Sequelize } from 'sequelize'

type Initializer = (db: Sequelize) => void

export {
  type Initializer,
}
