import { readPaginatedData } from '@/services/datareader'

let things = null
let locations = null

export async function getMarkers () {
  return readPaginatedData('https://acc.api.data.amsterdam.nl/vsd/iot_markers/')
}

export async function getLocations () {
  const data = await readPaginatedData('https://acc.api.data.amsterdam.nl/vsd/iot_locations/')
  const result = data.reduce((obj, item) => ({...obj, [item.id]: item}), {})
  return result
}

export async function getThings () {
  const data = await readPaginatedData('https://acc.api.data.amsterdam.nl/vsd/iot_things/')
  const result = data.reduce((obj, item) => ({...obj, [item.id]: item}), {})
  return result
}

export async function getThing (id) {
  if (!things) {
    things = getThings()
  }
  const all = await things
  return all[id]
}

export async function getLocation (id) {
  if (!locations) {
    locations = getLocations()
  }
  const all = await locations
  return all[id]
}
