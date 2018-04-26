import { readPaginatedData } from '@/services/datareader'

let things = null

export async function getLocations () {
  return readPaginatedData('https://acc.api.data.amsterdam.nl/vsd/iot_locations/')
}

// async function getThings () {
//   const data = await readPaginatedData('https://acc.api.data.amsterdam.nl/vsd/iot_things/')
//   things = data.reduce((obj, item) => ({...obj, [item.id]: item}), {})
//   console.log('things', things)
// }

export async function getThing (id) {
  if (!things) {
    const data = await readPaginatedData('https://acc.api.data.amsterdam.nl/vsd/iot_things/')
    things = data.reduce((obj, item) => ({...obj, [item.id]: item}), {})
    console.log('things', things)
  }
  return things[id]
}
