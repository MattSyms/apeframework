import { getAddress } from './getAddress.js'
import type { Address } from '../../Address.js'

interface NodemailerAddress {
  address: string,
  name: string,
}

const getAddresses = (addresses?: Address[]): NodemailerAddress[] => {
  return addresses
    ? addresses
      .map(getAddress)
      .filter((address) => {
        return address !== undefined
      })
    : []
}

export {
  getAddresses,
}
