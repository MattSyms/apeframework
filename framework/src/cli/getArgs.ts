import { parseArgs } from './parseArgs.js'
import type { Args } from './Args.js'

const getArgs = (): Args => {
  return parseArgs(process.argv.slice(2))
}

export {
  getArgs,
}
