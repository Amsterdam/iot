import L from 'leaflet'

const markerIcon = L.icon({
  iconUrl: '../../static/markers/marker-icon-blue.png',
  shadowUrl: '../../static/markers/marker-shadow.png',
  iconSize: [25, 41],
  shadowSize: [50, 64],
  iconAnchor: [13, 40],
  shadowAnchor: [16, 62],
  popupAnchor: [-3, -76]
})

export function showLocations (map, locations) {
  const showInfo = loc => console.log('Info', loc)
  const showPopup = loc => {
    let [lat, lon] = loc.wgs84_geometry.coordinates
    L.popup()
      .setContent(loc.thing_id)
      .setLatLng([lat + 0.005, lon])
      .openOn(map)
  }
  const hidePopup = loc => map.closePopup()
  const markers = locations
    .map(location =>
      L.marker(location.wgs84_geometry.coordinates, { icon: markerIcon })
        .addTo(map)
        .on('click', () => showInfo(location))
        .on('mouseover', () => showPopup(location))
        .on('mouseout', () => hidePopup(location)))
  return markers
}
