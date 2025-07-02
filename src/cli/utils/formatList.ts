import { EOL } from 'node:os'

const formatList = (list: string[]): string => {
  return list
    .map((item) => { return `  ${item}` })
    .join(EOL)
}

export {
  formatList,
}
