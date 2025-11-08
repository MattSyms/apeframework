import type { Model, ModelStatic } from 'sequelize'

const oneToOne = (
  fk: string,
  a: { model: ModelStatic<Model>, asOne: string },
  b: { model: ModelStatic<Model>, asOne: string },
): void => {
  a.model.hasOne(
    b.model,
    { foreignKey: fk, as: b.asOne },
  )

  b.model.belongsTo(
    a.model,
    { foreignKey: fk, as: a.asOne },
  )
}

const oneToMany = (
  fk: string,
  a: { model: ModelStatic<Model>, asOne: string },
  b: { model: ModelStatic<Model>, asMany: string },
): void => {
  a.model.hasMany(
    b.model,
    { foreignKey: fk, as: b.asMany },
  )

  b.model.belongsTo(
    a.model,
    { foreignKey: fk, as: a.asOne },
  )
}

const manyToMany = (
  fkA: string,
  fkB: string,
  a: { model: ModelStatic<Model>, asOne: string, asMany: string },
  b: { model: ModelStatic<Model>, asOne: string, asMany: string },
  through: { model: ModelStatic<Model>, asMany: string },
): void => {
  a.model.belongsToMany(
    b.model,
    { through: through.model, foreignKey: fkA, otherKey: fkB, as: b.asMany },
  )

  b.model.belongsToMany(
    a.model,
    { through: through.model, foreignKey: fkB, otherKey: fkA, as: a.asMany },
  )

  oneToMany(fkA, a, through)
  oneToMany(fkB, b, through)
}

export {
  manyToMany,
  oneToMany,
  oneToOne,
}
