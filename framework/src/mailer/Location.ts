interface Location {
  name: string,
  address?: string,
  geo?: {
    latitude: number,
    longitude: number,
  },
}

export {
  type Location,
}
