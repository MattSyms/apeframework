import { parseBytes } from 'parser/parseBytes.js'

describe('parsing bytes', () => {
  test('returns expected value', async () => {
    expect(parseBytes(undefined)).toBe(0)
    expect(parseBytes(null)).toBe(0)
    expect(parseBytes(false)).toBe(0)
    expect(parseBytes(true)).toBe(1)
    expect(parseBytes(-3.5)).toBe(-3.5)
    expect(parseBytes(-1)).toBe(-1)
    expect(parseBytes(0)).toBe(0)
    expect(parseBytes(1)).toBe(1)
    expect(parseBytes(3.5)).toBe(3.5)
    expect(parseBytes(BigInt(-3))).toBe(-3)
    expect(parseBytes(BigInt(-1))).toBe(-1)
    expect(parseBytes(BigInt(0))).toBe(0)
    expect(parseBytes(BigInt(1))).toBe(1)
    expect(parseBytes(BigInt(3))).toBe(3)
    expect(parseBytes('')).toBe(0)
    expect(parseBytes('-3.5')).toBe(-3.5)
    expect(parseBytes('-1')).toBe(-1)
    expect(parseBytes('0')).toBe(0)
    expect(parseBytes('1')).toBe(1)
    expect(parseBytes('3.5')).toBe(3.5)
  })
})

describe('parsing bytes using a unit', () => {
  test('returns expected value', async () => {
    expect(parseBytes('1b')).toBe(1)
    expect(parseBytes('1kb')).toBe(1000)
    expect(parseBytes('1mb')).toBe(1000000)
    expect(parseBytes('1gb')).toBe(1000000000)
    expect(parseBytes('1tb')).toBe(1000000000000)
    expect(parseBytes('1pb')).toBe(1000000000000000)
    expect(parseBytes('1kib')).toBe(1024)
    expect(parseBytes('1mib')).toBe(131072)
    expect(parseBytes('1gib')).toBe(134200000)
    expect(parseBytes('1tib')).toBe(137400000000)
    expect(parseBytes('1pib')).toBe(140700000000000)
    expect(parseBytes('-3.5 B')).toBe(-3.5)
    expect(parseBytes('-3.5 KB')).toBe(-3500)
    expect(parseBytes('-3.5 MB')).toBe(-3500000)
    expect(parseBytes('-3.5 GB')).toBe(-3500000000)
    expect(parseBytes('-3.5 TB')).toBe(-3500000000000)
    expect(parseBytes('-3.5 PB')).toBe(-3500000000000000)
    expect(parseBytes('-3.5 KIB')).toBe(-3584)
    expect(parseBytes('-3.5 MIB')).toBe(-458752)
    expect(parseBytes('-3.5 GIB')).toBe(-469700000)
    expect(parseBytes('-3.5 TIB')).toBe(-480900000000)
    expect(parseBytes('-3.5 PIB')).toBe(-492450000000000)
  })
})

describe('parsing bytes using an invalid input', () => {
  test('throws an error', async () => {
    expect(() => {
      parseBytes('foo')
    }).toThrow('failed parsing bytes: invalid input')

    expect(() => {
      parseBytes({})
    }).toThrow('failed parsing bytes: invalid input')

    expect(() => {
      parseBytes([])
    }).toThrow('failed parsing bytes: invalid input')

    expect(() => {
      parseBytes(() => { })
    }).toThrow('failed parsing bytes: invalid input')

    expect(() => {
      parseBytes(Symbol('foo'))
    }).toThrow('failed parsing bytes: invalid input')
  })
})
