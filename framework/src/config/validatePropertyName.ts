import { PropertyNameError } from './errors/PropertyNameError.js'

const propertyNameRegex = /^[a-z](?:[0-9A-Za-z])*$/u

const validatePropertyName = (name: string): void => {
  if (!propertyNameRegex.test(name)) {
    throw new PropertyNameError(name)
  }
}

export {
  validatePropertyName,
}
