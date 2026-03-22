import { ParallelismError } from './errors/ParallelismError.js'

const validateParallelism = (parallelism?: number): void => {
  if (parallelism && parallelism < 1) {
    throw new ParallelismError(parallelism)
  }
}

export {
  validateParallelism,
}
