const isValidGeolocation = (latitude: number, longitude: number): boolean => {
  return latitude >= -90
    && latitude <= 90
    && longitude >= -180
    && longitude <= 180
}

export {
  isValidGeolocation,
}
