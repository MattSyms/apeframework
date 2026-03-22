import fs from 'fs-extra'
import { FileInitError } from './errors/FileInitError.js'

const initFile = (path: string): void => {
  if (path === '') {
    throw new FileInitError('', 'empty path')
  }

  try {
    fs.ensureFileSync(path)
  } catch (error) {
    throw new FileInitError(path, (error as Error).message)
  }
}

export {
  initFile,
}
