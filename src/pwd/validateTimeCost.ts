import { TimeCostError } from './errors/TimeCostError.js'

const validateTimeCost = (timeCost?: number): void => {
  if (timeCost && timeCost < 2) {
    throw new TimeCostError(timeCost)
  }
}

export {
  validateTimeCost,
}
