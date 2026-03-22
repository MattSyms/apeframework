import { createUnitParser } from 'parser/factories/unit/createUnitParser.js'

describe('creating a unit parser', () => {
  test('returns expected value', async () => {
    const parseFoo = createUnitParser({
      type: 'foo',
      units: [
        {
          symbol: 'x',
          value: 0,
        },
        {
          symbol: 'y',
          value: 1,
        },
        {
          symbol: 'z',
          value: 3.5,
        },
      ],
    })

    expect(parseFoo(undefined)).toBe(0)
    expect(parseFoo(null)).toBe(0)
    expect(parseFoo(false)).toBe(0)
    expect(parseFoo(true)).toBe(1)
    expect(parseFoo(-3.5)).toBe(-3.5)
    expect(parseFoo(-1)).toBe(-1)
    expect(parseFoo(0)).toBe(0)
    expect(parseFoo(1)).toBe(1)
    expect(parseFoo(3.5)).toBe(3.5)
    expect(parseFoo(BigInt(-3))).toBe(-3)
    expect(parseFoo(BigInt(-1))).toBe(-1)
    expect(parseFoo(BigInt(0))).toBe(0)
    expect(parseFoo(BigInt(1))).toBe(1)
    expect(parseFoo(BigInt(3))).toBe(3)
    expect(parseFoo('')).toBe(0)
    expect(parseFoo('-3.5')).toBe(-3.5)
    expect(parseFoo('-1')).toBe(-1)
    expect(parseFoo('0')).toBe(0)
    expect(parseFoo('1')).toBe(1)
    expect(parseFoo('3.5')).toBe(3.5)

    expect(parseFoo('1x')).toBe(0)
    expect(parseFoo('1y')).toBe(1)
    expect(parseFoo('1z')).toBe(3.5)
    expect(parseFoo('-3.5 X')).toBe(-0)
    expect(parseFoo('-3.5 Y')).toBe(-3.5)
    expect(parseFoo('-3.5 Z')).toBe(-12.25)

    expect(() => {
      parseFoo('foo')
    }).toThrow('failed parsing foo: invalid input')

    expect(() => {
      parseFoo({})
    }).toThrow('failed parsing foo: invalid input')

    expect(() => {
      parseFoo([])
    }).toThrow('failed parsing foo: invalid input')

    expect(() => {
      parseFoo(() => { })
    }).toThrow('failed parsing foo: invalid input')

    expect(() => {
      parseFoo(Symbol('foo'))
    }).toThrow('failed parsing foo: invalid input')
  })
})
