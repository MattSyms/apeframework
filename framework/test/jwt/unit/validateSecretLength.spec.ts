import { Algorithm } from 'jwt/Algorithm.js'
import { validateSecretLength } from 'jwt/validateSecretLength.js'

describe('validating a secret length', () => {
  test('succeeds', async () => {
    validateSecretLength(
      Algorithm.HS256,
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    )

    validateSecretLength(
      Algorithm.HS256,
      '😀😀😀😀😀😀😀😀',
    )

    validateSecretLength(
      Algorithm.HS384,
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    )

    validateSecretLength(
      Algorithm.HS384,
      '😀😀😀😀😀😀😀😀😀😀😀😀',
    )

    validateSecretLength(
      Algorithm.HS512,
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    )

    validateSecretLength(
      Algorithm.HS512,
      '😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀',
    )
  })
})

describe('validating an invalid secret length', () => {
  test('throws an error', async () => {
    expect(() => {
      validateSecretLength(
        Algorithm.HS256,
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      )
    }).toThrow('invalid secret length')

    expect(() => {
      validateSecretLength(
        Algorithm.HS256,
        '😀😀😀😀😀😀😀',
      )
    }).toThrow('invalid secret length')

    expect(() => {
      validateSecretLength(
        Algorithm.HS384,
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      )
    }).toThrow('invalid secret length')

    expect(() => {
      validateSecretLength(
        Algorithm.HS384,
        '😀😀😀😀😀😀😀😀😀😀😀',
      )
    }).toThrow('invalid secret length')

    expect(() => {
      validateSecretLength(
        Algorithm.HS512,
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      )
    }).toThrow('invalid secret length')

    expect(() => {
      validateSecretLength(
        Algorithm.HS512,
        '😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀',
      )
    }).toThrow('invalid secret length')
  })
})
