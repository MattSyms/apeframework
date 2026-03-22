import { PropertyParseError } from './errors/PropertyParseError.js'
import type { Parser } from '../parser/Parser.js'

const parseProperty = <Type>(
  name: string,
  parser: Parser<Type>,
  defaultValue: any,
  fileValue: any,
  envValue: any,
  argsValue: any,
): Type => {
  const sources = [
    {
      name: 'command line arguments',
      value: argsValue,
    },
    {
      name: 'environment variables',
      value: envValue,
    },
    {
      name: 'configuration file',
      value: fileValue,
    },
    {
      name: 'default value',
      value: defaultValue,
    },
  ]

  const source = sources.find((s) => {
    return s.value !== undefined
  }) || {
    name: 'undefined value',
    value: undefined,
  }

  try {
    return parser(source.value)
  } catch (error) {
    throw new PropertyParseError(name, source.name, (error as Error).message)
  }
}

export {
  parseProperty,
}
