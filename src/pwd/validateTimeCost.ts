import { TimeCostError } from './errors/TimeCostError.js'

const validateTimeCost = (timeCost?: number): void => {
  if (timeCost && timeCost < 1) {
    throw new TimeCostError(timeCost)
  }
}

export {
  validateTimeCost,
}
