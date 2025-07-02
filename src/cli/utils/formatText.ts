import { EOL } from 'node:os'

const formatText = (text: string[]): string => {
  return text.join(EOL)
}

export {
  formatText,
}
