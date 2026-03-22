import { readFile } from './readFile.js'
import type { Env } from './Env.js'

const getEnv = (params?: {
  file?: {
    path: string,
    required?: boolean,
  },
}): Env => {
  let file: Env = {}

  if (params?.file) {
    file = readFile(params.file.path, params.file.required)
  }

  return {
    ...file,
    ...process.env as Env,
  }
}

export {
  getEnv,
}
