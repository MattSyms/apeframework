import dotenv from 'dotenv'
import fs from 'fs-extra'
import { FileReadError } from './errors/FileReadError.js'
import type { Env } from './Env.js'

const readFile = (path: string, required = false): Env => {
  try {
    if (fs.existsSync(path)) {
      return dotenv.parse(fs.readFileSync(path))
    }
  } catch (error) {
    throw new FileReadError(path, (error as Error).message)
  }

  if (required) {
    throw new FileReadError(path, 'missing file')
  }

  return {}
}

export {
  readFile,
}
