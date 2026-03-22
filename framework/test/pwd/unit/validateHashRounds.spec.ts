import { validateHashRounds } from 'pwd/validateHashRounds.js'

describe('validating password hash rounds', () => {
  test('succeeds', async () => {
    validateHashRounds(1)
    validateHashRounds(3)
  })
})

describe('validating invalid password hash rounds', () => {
  test('throws an error', async () => {
    expect(() => {
      validateHashRounds(0)
    }).toThrow('invalid hash rounds "0"')

    expect(() => {
      validateHashRounds(-3)
    }).toThrow('invalid hash rounds "-3"')
  })
})
