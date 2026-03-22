const getTimestamp = (date: Date = new Date()): number => {
  return Math.trunc(date.getTime() / 1000)
}

export {
  getTimestamp,
}
