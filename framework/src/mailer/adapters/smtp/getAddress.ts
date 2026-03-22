import type { Address } from '../../Address.js'

interface NodemailerAddress {
  address: string,
  name: string,
}

const getAddress = (address?: Address): NodemailerAddress | undefined => {
  return address
    ? {
      address: address.email,
      name: address.name ?? '',
    }
    : undefined
}

export {
  getAddress,
}
