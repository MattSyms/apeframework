import { randomInt } from 'crypto'

const getRandomIntString = (length: number): string => {
  let string = ''
  for (let i = 0; i < length; i += 1) {
    string += randomInt(0, 10).toString()
  }
  return string
}

export {
  getRandomIntString,
}
