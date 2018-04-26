import L from 'leaflet'

import { rd } from '../services/geojson'

/**
 * Returns a Leaflet map for Amsterdam
 * @param el
 * @returns {*}
 */
export function amsMap (el) {
  const map = L.map(el, {
    crs: rd,
    attributionControl: false,
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([52.375, 4.9], 8)

  map.addLayer(tileLayer())

  // const greenIcon = L.icon({
  //   iconUrl: '../../static/markers/marker-icon-blue.png',
  //   shadowUrl: '../../static/markers/marker-shadow.png',
  //   iconSize: [25, 41],
  //   shadowSize: [50, 64],
  //   iconAnchor: [13, 40],
  //   shadowAnchor: [4, 62],
  //   popupAnchor: [-3, -76]
  // })
  // L.marker([52.375, 4.9], {icon: greenIcon}).addTo(map)
  // L.circleMarker([52.375, 4.9]).addTo(map)

  return map
}

/**
 * Returns a tile layer for Amsterdam
 * This tyle layer can be used to show a given shape on the map of Amsterdam
 * @returns {*}
 */
function tileLayer () {
  return L.tileLayer(
    'https://t1.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png',
    {
      tms: true,
      minZoom: 7,
      maxZoom: 16,
      opacity: 0.8
    }
  )
}
