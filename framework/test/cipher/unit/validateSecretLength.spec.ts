import { Algorithm } from 'cipher/Algorithm.js'
import { validateSecretLength } from 'cipher/validateSecretLength.js'

describe('validating a secret length', () => {
  test('succeeds', async () => {
    validateSecretLength(
      Algorithm.AES128,
      'xxxxxxxxxxxxxxxx',
    )

    validateSecretLength(
      Algorithm.AES128,
      '😀😀😀😀',
    )

    validateSecretLength(
      Algorithm.AES192,
      'xxxxxxxxxxxxxxxxxxxxxxxx',
    )

    validateSecretLength(
      Algorithm.AES192,
      '😀😀😀😀😀😀',
    )

    validateSecretLength(
      Algorithm.AES256,
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    )

    validateSecretLength(
      Algorithm.AES256,
      '😀😀😀😀😀😀😀😀',
    )
  })
})

describe('validating an invalid secret length', () => {
  test('throws an error', async () => {
    expect(() => {
      validateSecretLength(
        Algorithm.AES128,
        'xxxxxxxxxxxxxxx',
      )
    }).toThrow('invalid secret length')

    expect(() => {
      validateSecretLength(
        Algorithm.AES128,
        '😀😀😀😀😀',
      )
    }).toThrow('invalid secret length')

    expect(() => {
      validateSecretLength(
        Algorithm.AES192,
        'xxxxxxxxxxxxxxxxxxxxxxx',
      )
    }).toThrow('invalid secret length')

    expect(() => {
      validateSecretLength(
        Algorithm.AES192,
        '😀😀😀😀😀😀😀',
      )
    }).toThrow('invalid secret length')

    expect(() => {
      validateSecretLength(
        Algorithm.AES256,
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      )
    }).toThrow('invalid secret length')

    expect(() => {
      validateSecretLength(
        Algorithm.AES256,
        '😀😀😀😀😀😀😀😀😀',
      )
    }).toThrow('invalid secret length')
  })
})
