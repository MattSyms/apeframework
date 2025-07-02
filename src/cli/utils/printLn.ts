import { EOL } from 'node:os'

const printLn = (s: string): void => {
  process.stdout.write(`${s}${EOL}`)
}

export {
  printLn,
}
