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
    ],
  },
]

export {
  config as default,
}
