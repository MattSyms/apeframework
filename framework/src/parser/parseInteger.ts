import { ParseError } from './errors/ParseError.js'
import { parseNumber } from './parseNumber.js'
import type { Parser } from './Parser.js'

const parseInteger: Parser<number> = (input) => {
  let number: number

  try {
    number = parseNumber(input)
  } catch (error) {
    throw new ParseError('integer')
  }

  if (!Number.isSafeInteger(number)) {
    throw new ParseError('integer')
  }

  return number
}

export {
  parseInteger,
}
