import { readPaginatedData } from '@/services/datareader'

export async function getLocations () {
  return readPaginatedData('https://acc.api.data.amsterdam.nl/vsd/iot_locations/')
}
