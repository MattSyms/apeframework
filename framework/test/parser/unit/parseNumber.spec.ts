import { parseNumber } from 'parser/parseNumber.js'

describe('parsing a number', () => {
  test('returns expected value', async () => {
    expect(parseNumber(undefined)).toBe(0)
    expect(parseNumber(null)).toBe(0)
    expect(parseNumber(false)).toBe(0)
    expect(parseNumber(true)).toBe(1)
    expect(parseNumber(-3.5)).toBe(-3.5)
    expect(parseNumber(-1)).toBe(-1)
    expect(parseNumber(0)).toBe(0)
    expect(parseNumber(1)).toBe(1)
    expect(parseNumber(3.5)).toBe(3.5)
    expect(parseNumber(BigInt(-3))).toBe(-3)
    expect(parseNumber(BigInt(-1))).toBe(-1)
    expect(parseNumber(BigInt(0))).toBe(0)
    expect(parseNumber(BigInt(1))).toBe(1)
    expect(parseNumber(BigInt(3))).toBe(3)
    expect(parseNumber('')).toBe(0)
    expect(parseNumber('-3.5')).toBe(-3.5)
    expect(parseNumber('-1')).toBe(-1)
    expect(parseNumber('0')).toBe(0)
    expect(parseNumber('1')).toBe(1)
    expect(parseNumber('3.5')).toBe(3.5)
  })
})

describe('parsing a number using an invalid input', () => {
  test('throws an error', async () => {
    expect(() => {
      parseNumber('foo')
    }).toThrow('failed parsing number: invalid input')

    expect(() => {
      parseNumber({})
    }).toThrow('failed parsing number: invalid input')

    expect(() => {
      parseNumber([])
    }).toThrow('failed parsing number: invalid input')

    expect(() => {
      parseNumber(() => { })
    }).toThrow('failed parsing number: invalid input')

    expect(() => {
      parseNumber(Symbol('foo'))
    }).toThrow('failed parsing number: invalid input')
  })
})
