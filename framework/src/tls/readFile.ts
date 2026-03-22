import fs from 'fs-extra'
import { FileReadError } from './errors/FileReadError.js'

const readFile = (path: string): string => {
  try {
    if (fs.existsSync(path)) {
      return fs.readFileSync(path).toString()
    }
  } catch (error) {
    throw new FileReadError(path, (error as Error).message)
  }

  throw new FileReadError(path, 'missing file')
}

export {
  readFile,
}
