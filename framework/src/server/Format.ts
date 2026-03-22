import type { FormatDefinition } from 'ajv'

type Format = NumberFormat | StringFormat

interface NumberFormat extends FormatDefinition<number> {
  name: string,
}

interface StringFormat extends FormatDefinition<string> {
  name: string,
}

export {
  type Format,
}
