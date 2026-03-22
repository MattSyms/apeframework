import { validatePropertyName } from 'config/validatePropertyName.js'

describe('validating a property name', () => {
  test('succeeds', async () => {
    validatePropertyName('f')
    validatePropertyName('fB')
    validatePropertyName('fBar')

    validatePropertyName('fo')
    validatePropertyName('foB')
    validatePropertyName('foBar')

    validatePropertyName('foo')
    validatePropertyName('fooB')
    validatePropertyName('fooBar')

    validatePropertyName('x2')
    validatePropertyName('x2B')
    validatePropertyName('x2Bar')

    validatePropertyName('x2z')
    validatePropertyName('x2zB')
    validatePropertyName('x2zBar')

    validatePropertyName('x23')
    validatePropertyName('x23B')
    validatePropertyName('x23Bar')
  })
})

describe('validating an invalid property name', () => {
  test('throws an error', async () => {
    expect(() => {
      validatePropertyName('F')
    }).toThrow('invalid property name "F"')

    expect(() => {
      validatePropertyName('Fo')
    }).toThrow('invalid property name "Fo"')

    expect(() => {
      validatePropertyName('Foo')
    }).toThrow('invalid property name "Foo"')

    expect(() => {
      validatePropertyName('1')
    }).toThrow('invalid property name "1"')

    expect(() => {
      validatePropertyName('1y')
    }).toThrow('invalid property name "1y"')

    expect(() => {
      validatePropertyName('1yz')
    }).toThrow('invalid property name "1yz"')
  })
})
