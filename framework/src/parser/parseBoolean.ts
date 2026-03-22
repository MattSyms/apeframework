import { ParseError } from './errors/ParseError.js'
import type { Parser } from './Parser.js'

const parseBoolean: Parser<boolean> = (input) => {
  if ([
    true,
    1,
    BigInt(1),
    '1',
    'TRUE',
    'true',
  ].includes(input)) {
    return true
  } else if ([
    undefined,
    null,
    false,
    0,
    BigInt(0),
    '',
    '0',
    'FALSE',
    'false',
  ].includes(input)) {
    return false
  }

  throw new ParseError('boolean')
}

export {
  parseBoolean,
}
