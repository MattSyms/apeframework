import type { Args } from './Args.js'

type Command = (args: Args) => Promise<void>

export {
  type Command,
}
