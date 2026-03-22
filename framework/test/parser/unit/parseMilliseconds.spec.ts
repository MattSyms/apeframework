import { parseMilliseconds } from 'parser/parseMilliseconds.js'

describe('parsing milliseconds', () => {
  test('returns expected value', async () => {
    expect(parseMilliseconds(undefined)).toBe(0)
    expect(parseMilliseconds(null)).toBe(0)
    expect(parseMilliseconds(false)).toBe(0)
    expect(parseMilliseconds(true)).toBe(1)
    expect(parseMilliseconds(-3.5)).toBe(-3.5)
    expect(parseMilliseconds(-1)).toBe(-1)
    expect(parseMilliseconds(0)).toBe(0)
    expect(parseMilliseconds(1)).toBe(1)
    expect(parseMilliseconds(3.5)).toBe(3.5)
    expect(parseMilliseconds(BigInt(-3))).toBe(-3)
    expect(parseMilliseconds(BigInt(-1))).toBe(-1)
    expect(parseMilliseconds(BigInt(0))).toBe(0)
    expect(parseMilliseconds(BigInt(1))).toBe(1)
    expect(parseMilliseconds(BigInt(3))).toBe(3)
    expect(parseMilliseconds('')).toBe(0)
    expect(parseMilliseconds('-3.5')).toBe(-3.5)
    expect(parseMilliseconds('-1')).toBe(-1)
    expect(parseMilliseconds('0')).toBe(0)
    expect(parseMilliseconds('1')).toBe(1)
    expect(parseMilliseconds('3.5')).toBe(3.5)
  })
})

describe('parsing milliseconds using a unit', () => {
  test('returns expected value', async () => {
    expect(parseMilliseconds('1ms')).toBe(1)
    expect(parseMilliseconds('1s')).toBe(1000)
    expect(parseMilliseconds('1m')).toBe(60000)
    expect(parseMilliseconds('1h')).toBe(3600000)
    expect(parseMilliseconds('1d')).toBe(86400000)
    expect(parseMilliseconds('-3.5 MS')).toBe(-3.5)
    expect(parseMilliseconds('-3.5 S')).toBe(-3500)
    expect(parseMilliseconds('-3.5 M')).toBe(-210000)
    expect(parseMilliseconds('-3.5 H')).toBe(-12600000)
    expect(parseMilliseconds('-3.5 D')).toBe(-302400000)
  })
})

describe('parsing milliseconds using an invalid input', () => {
  test('throws an error', async () => {
    expect(() => {
      parseMilliseconds('foo')
    }).toThrow('failed parsing milliseconds: invalid input')

    expect(() => {
      parseMilliseconds({})
    }).toThrow('failed parsing milliseconds: invalid input')

    expect(() => {
      parseMilliseconds([])
    }).toThrow('failed parsing milliseconds: invalid input')

    expect(() => {
      parseMilliseconds(() => { })
    }).toThrow('failed parsing milliseconds: invalid input')

    expect(() => {
      parseMilliseconds(Symbol('foo'))
    }).toThrow('failed parsing milliseconds: invalid input')
  })
})
