import { ParseError } from '../../errors/ParseError.js'
import type { Parser } from '../../Parser.js'

const createEnumParser = <Enum extends Record<string, string | number>>(
  params: {
    type: string,
    enum: Enum,
  },
): Parser<Enum[keyof Enum]> => {
  return (input) => {
    if (!Object.values(params.enum).includes(input)) {
      throw new ParseError(params.type)
    }

    return input
  }
}

export {
  createEnumParser,
}
