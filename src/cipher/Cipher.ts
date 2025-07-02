import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto'
import { DecryptError } from './errors/DecryptError.js'
import { validateSecretLength } from './validateSecretLength.js'
import type { Algorithm } from './Algorithm.js'

class Cipher {
  private readonly algorithm: Algorithm

  private readonly secret: Buffer

  public constructor(params: {
    algorithm: Algorithm,
    secret: string,
  }) {
    validateSecretLength(params.algorithm, params.secret)

    this.algorithm = params.algorithm
    this.secret = Buffer.from(params.secret, 'utf8')
  }

  public encrypt(string: string): string {
    const iv = randomBytes(16)
    const cipher = createCipheriv(this.algorithm, this.secret, iv)

    return iv.toString('hex')
      + cipher.update(string, 'utf8', 'hex')
      + cipher.final('hex')
  }

  public decrypt(string: string): string {
    const buffer = Buffer.from(string, 'hex')
    const iv = buffer.subarray(0, 16)
    const decipher = createDecipheriv(this.algorithm, this.secret, iv)

    try {
      return decipher.update(buffer.subarray(16), undefined, 'utf8')
        + decipher.final('utf8')
    } catch (error) {
      throw new DecryptError((error as Error).message)
    }
  }
}

export {
  Cipher,
}
