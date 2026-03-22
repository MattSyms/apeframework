interface Payload {
  [key: string]: unknown,
  iss?: string,
  aud?: string[],
  sub?: string,
  jti?: string,
  iat?: number,
  exp?: number,
  nbf?: number,
}

export {
  type Payload,
}
