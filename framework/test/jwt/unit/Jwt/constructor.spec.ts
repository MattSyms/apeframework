import { Algorithm } from 'jwt/Algorithm.js'
import { Jwt } from 'jwt/Jwt.js'

describe('creating a jwt using the hs256 algorithm', () => {
  test('succeeds', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS256,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    })

    expect(jwt).toBeInstanceOf(Jwt)
  })
})

describe('creating a jwt using the hs384 algorithm', () => {
  test('succeeds', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS384,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    })

    expect(jwt).toBeInstanceOf(Jwt)
  })
})

describe('creating a jwt using the hs512 algorithm', () => {
  test('succeeds', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS512,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\
xxxxxxxxxxxxxxxx',
    })

    expect(jwt).toBeInstanceOf(Jwt)
  })
})
