import { jwtVerify, SignJWT } from 'jose'
import { validateSecretLength } from './validateSecretLength.js'
import type { Algorithm } from './Algorithm.js'
import type { Payload } from './Payload.js'

class Jwt {
  private readonly algorithm: Algorithm

  private readonly secret: Uint8Array

  public constructor(params: {
    algorithm: Algorithm,
    secret: string,
  }) {
    validateSecretLength(params.algorithm, params.secret)

    this.algorithm = params.algorithm
    this.secret = new TextEncoder().encode(params.secret)
  }

  public async createToken(payload: Payload): Promise<string> {
    return new SignJWT(payload)
      .setProtectedHeader({
        typ: 'JWT',
        alg: this.algorithm,
      })
      .sign(this.secret)
  }

  public async verifyToken<Type extends Payload>(
    token: string,
    timestamp: number,
  ): Promise<Type | undefined> {
    try {
      const { payload } = await jwtVerify(token, this.secret, {
        typ: 'JWT',
        currentDate: new Date(timestamp * 1000),
      })

      return payload as Type
    } catch (error) {
      return undefined
    }
  }
}

export {
  Jwt,
}
