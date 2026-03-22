const isValidIsoDate = (date: string): boolean => {
  const d = new Date(date)

  return !isNaN(d.getTime()) && date === d.toISOString()
}

export {
  isValidIsoDate,
}
