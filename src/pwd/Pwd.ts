import argon2 from 'argon2'
import { validateHashLength } from './validateHashLength.js'
import { validateMemoryCost } from './validateMemoryCost.js'
import { validateParallelism } from './validateParallelism.js'
import { validateTimeCost } from './validateTimeCost.js'
import type { Algorithm } from './Algorithm.js'

class Pwd {
  private readonly algorithm: Algorithm | undefined

  private readonly hashLength: number | undefined

  private readonly timeCost: number | undefined

  private readonly memoryCost: number | undefined

  private readonly parallelism: number | undefined

  public constructor(params: {
    algorithm?: Algorithm,
    hashLength?: number,
    timeCost?: number,
    memoryCost?: number,
    parallelism?: number,
  }) {
    this.algorithm = params.algorithm

    validateHashLength(params.hashLength)
    this.hashLength = params.hashLength

    validateTimeCost(params.timeCost)
    this.timeCost = params.timeCost

    validateMemoryCost(params.memoryCost)
    this.memoryCost = params.memoryCost

    validateParallelism(params.parallelism)
    this.parallelism = params.parallelism
  }

  public async hashPassword(
    password: string,
  ): Promise<string> {
    return argon2.hash(password, {
      ...this.algorithm ? { type: this.algorithm } : {},
      hashLength: this.hashLength,
      timeCost: this.timeCost,
      memoryCost: this.memoryCost,
      parallelism: this.parallelism,
    })
  }

  public async verifyPassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return argon2.verify(hash, password)
  }
}

export {
  Pwd,
}
