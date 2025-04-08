import base from '@apeframework/eslint/base'
import typescript from '@apeframework/eslint/typescript'

const config = [
  base(),
  {
    files: ['*.ts', '**/*.ts'],
    ...typescript(),
  },
  {
    ignores: [
      'build',
      'test',
    ],
  },
  {
    rules: {},
  },
  {
    files: ['*.ts', '**/*.ts'],
    rules: {},
  },
]

export {
  config as default,
}
