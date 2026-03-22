type Rules<Prefix extends string> = Record<
  `${Prefix}${string}`, 'off' | ['error', ...any[]]
>

export {
  type Rules,
}
