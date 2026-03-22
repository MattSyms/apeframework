interface Args {
  positional: string[],
  optional: Record<string, boolean | string | undefined>,
}

export {
  type Args,
}
