import { EOL } from 'node:os'

const formatTable = (table: string[][]): string => {
  const colLength: number[] = []

  table.forEach((row) => {
    ['', ...row].forEach((col, i) => {
      colLength[i] = col.length > (colLength[i] ?? 0)
        ? col.length
        : colLength[i] ?? 0
    })
  })

  return table
    .map((row) => {
      return ['', ...row]
        .map((col, i) => { return col.padEnd(colLength[i], ' ') })
        .join('  ')
    })
    .join(EOL)
}

export {
  formatTable,
}
