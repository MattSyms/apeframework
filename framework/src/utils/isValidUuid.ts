const uuidRegex
  = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/u

const isValidUuid = (uuid: string): boolean => {
  return uuidRegex.test(uuid)
}

export {
  isValidUuid,
}
