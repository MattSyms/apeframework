import { MemoryCostError } from './errors/MemoryCostError.js'

const validateMemoryCost = (memoryCost?: number): void => {
  if (memoryCost && memoryCost < 1024) {
    throw new MemoryCostError(memoryCost)
  }
}

export {
  validateMemoryCost,
}
