import L from 'leaflet'
import { getThing } from '@/services/api/iot'

const markerOptions = {
  iconUrl: '../../static/markers/marker-icon-blue.png',
  shadowUrl: '../../static/markers/marker-shadow.png',
  iconSize: [25, 41],
  shadowSize: [50, 64],
  iconAnchor: [13, 40],
  shadowAnchor: [16, 62],
  popupAnchor: [-3, -76]
}

let clicker

function getMarkerIcon (location) {
  // const thing = await getThing(location.thing_id)
  const iconUrls = {
    'Camera': 'marker-icon-blue.png',
    'Beacon': 'marker-icon-green.png'
  }
  const iconUrl = '../../static/markers/' + iconUrls['Camera']
  console.log(iconUrl)
  return L.icon({
    ...markerOptions,
    iconUrl
  })
}

export function showLocations (map, locations, onClick) {
  const showInfo = loc => {
    if (clicker) {
      map.removeLayer(clicker)
    }
    clicker = L.circleMarker(loc.wgs84_geometry.coordinates)
    clicker.addTo(map)
    onClick(loc)
  }
  const showPopup = async loc => {
    let [lat, lon] = loc.wgs84_geometry.coordinates
    let thing = await getThing(loc.thing_id)
    L.popup({ offset: new L.Point(0, -40) })
      .setContent(thing.name)
      .setLatLng([lat, lon])
      .openOn(map)
  }
  const hidePopup = loc => map.closePopup()

  const markers = locations
    .map(location =>
      L.marker(location.wgs84_geometry.coordinates, { icon: getMarkerIcon(location) })
        .addTo(map)
        .on('click', () => showInfo(location))
        .on('mouseover', () => showPopup(location))
        .on('mouseout', () => hidePopup(location)))
  return markers
}
