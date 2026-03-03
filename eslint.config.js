import javascript from '@apeframework/eslint/javascript'
import typescript from '@apeframework/eslint/typescript'

const config = [
  {
    files: ['*.js', '**/*.js'],
    ...javascript(),
  },
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
    files: ['*.js', '**/*.js'],
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
