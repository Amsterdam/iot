import L from 'leaflet'

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

function getMarkerIcon (marker) {
  const iconUrls = {
    'Camera': 'marker-icon-blue.png',
    'Beacon': 'marker-icon-green.png'
  }
  const iconUrl = '../../static/markers/' + iconUrls[marker.device_type]
  return L.icon({
    ...markerOptions,
    iconUrl
  })
}

export function showLocations (map, markers, onClick) {
  const showInfo = loc => {
    if (clicker) {
      map.removeLayer(clicker)
    }
    clicker = L.circleMarker(loc.wgs84_geometry.coordinates)
    clicker.addTo(map)
    onClick(loc)
  }

  const showPopup = async marker => {
    let [lat, lon] = marker.wgs84_geometry.coordinates
    L.popup({ offset: new L.Point(0, -40) })
      .setContent(marker.name)
      .setLatLng([lat, lon])
      .openOn(map)
  }

  const hidePopup = loc => map.closePopup()

  const locationMarkers = markers
    .map(marker =>
      L.marker(marker.wgs84_geometry.coordinates, { icon: getMarkerIcon(marker) })
        .addTo(map)
        .on('click', () => showInfo(marker))
        .on('mouseover', () => showPopup(marker))
        .on('mouseout', () => hidePopup(marker)))
  return locationMarkers
}
