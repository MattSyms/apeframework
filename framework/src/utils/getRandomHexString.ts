import { randomBytes } from 'node:crypto'

const getRandomHexString = (length: number): string => {
  return randomBytes(length / 2 + 1).toString('hex').substring(0, length)
}

export {
  getRandomHexString,
}
