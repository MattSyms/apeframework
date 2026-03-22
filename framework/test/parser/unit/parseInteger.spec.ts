import { parseInteger } from 'parser/parseInteger.js'

describe('parsing an integer', () => {
  test('returns expected value', async () => {
    expect(parseInteger(undefined)).toBe(0)
    expect(parseInteger(null)).toBe(0)
    expect(parseInteger(false)).toBe(0)
    expect(parseInteger(true)).toBe(1)
    expect(parseInteger(-1)).toBe(-1)
    expect(parseInteger(0)).toBe(0)
    expect(parseInteger(1)).toBe(1)
    expect(parseInteger(BigInt(-3))).toBe(-3)
    expect(parseInteger(BigInt(-1))).toBe(-1)
    expect(parseInteger(BigInt(0))).toBe(0)
    expect(parseInteger(BigInt(1))).toBe(1)
    expect(parseInteger(BigInt(3))).toBe(3)
    expect(parseInteger('')).toBe(0)
    expect(parseInteger('-1')).toBe(-1)
    expect(parseInteger('0')).toBe(0)
    expect(parseInteger('1')).toBe(1)
  })
})

describe('parsing an integer using an invalid input', () => {
  test('throws an error', async () => {
    expect(() => {
      parseInteger(-3.5)
    }).toThrow('failed parsing integer: invalid input')

    expect(() => {
      parseInteger(3.5)
    }).toThrow('failed parsing integer: invalid input')

    expect(() => {
      parseInteger('foo')
    }).toThrow('failed parsing integer: invalid input')

    expect(() => {
      parseInteger('-3.5')
    }).toThrow('failed parsing integer: invalid input')

    expect(() => {
      parseInteger('3.5')
    }).toThrow('failed parsing integer: invalid input')

    expect(() => {
      parseInteger({})
    }).toThrow('failed parsing integer: invalid input')

    expect(() => {
      parseInteger([])
    }).toThrow('failed parsing integer: invalid input')

    expect(() => {
      parseInteger(() => { })
    }).toThrow('failed parsing integer: invalid input')

    expect(() => {
      parseInteger(Symbol('foo'))
    }).toThrow('failed parsing integer: invalid input')
  })
})
