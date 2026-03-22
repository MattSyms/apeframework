import { getPropertyEnvVar } from './getPropertyEnvVar.js'
import { parseProperty } from './parseProperty.js'
import { readFile } from './readFile.js'
import { validatePropertyName } from './validatePropertyName.js'
import type { Config } from './Config.js'
import type { Properties } from './Properties.js'
import type { Args } from '../cli/Args.js'
import type { Env } from '../env/Env.js'

const getConfig = <Type extends Config>(params: {
  properties: Properties<Type>,
  file?: {
    path: string,
    required?: boolean,
  },
  env?: Env,
  args?: Args,
}): Type => {
  const file = params.file
    ? readFile(params.file.path, params.file.required)
    : {}

  const env: Env = params.env ?? {}

  const args: Args = params.args ?? { positional: [], optional: {} }

  const config: Config = {}

  for (const name in params.properties) {
    validatePropertyName(name)

    config[name] = parseProperty(
      name,
      params.properties[name].parser,
      params.properties[name].default,
      file[name],
      env[getPropertyEnvVar(name)],
      args.optional[name],
    )
  }

  return config as Type
}

export {
  getConfig,
}
