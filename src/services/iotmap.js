import L from 'leaflet'
import 'leaflet.markercluster'

import { mapHome } from './map'

const ICON_PATH = '../../static/markers/'

const markerOptions = {
  iconSize: [16, 16],
  iconAnchor: [8, 15],
  popupAnchor: [-3, -76]
}

const markerTypes = {
  'Camera': {
    id: 'Camera',
    iconUrl: ICON_PATH + 'video-2x.png',
    name: 'Camera',
    layer: null,
    enabled: true
  },
  'Beacon': {
    id: 'Beacon',
    iconUrl: ICON_PATH + 'signpost-2x.png',
    name: 'Baken',
    layer: null,
    enabled: true
  }
}

let clicker

const markerGroup = L.markerClusterGroup()

function getMarkerIcon (marker) {
  const iconUrl = '../../static/markers/' + markerTypes[marker.device_type].iconUrl
  return L.icon({
    ...markerOptions,
    iconUrl
  })
}

export function getMarkerTypes () {
  return markerTypes
}

export function toggleMarkers (markerType) {
  markerTypes[markerType].enabled = !markerTypes[markerType].enabled
  if (markerTypes[markerType].layer) {
    if (markerTypes[markerType].enabled) {
      markerGroup.addLayer(markerTypes[markerType].layer)
    } else {
      markerGroup.removeLayer(markerTypes[markerType].layer)
    }
  }
}

function homeButton (map) {
  const HomeControl = L.Control.extend({

    options: {
      position: 'topleft'
    },

    onAdd: function (map) {
      const container = L.DomUtil.create('img', 'leaflet-bar leaflet-control leaflet-control-custom')
      container.src = ICON_PATH + 'home-3x.png'
      container.style.backgroundColor = 'white'
      container.style.width = '33px'
      container.style.height = '33px'

      container.onclick = function () {
        mapHome(map)
      }
      return container
    }
  })

  map.addControl(new HomeControl())
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
    L.popup({ offset: new L.Point(0, -20) })
      .setContent(`<div class="font-weight-bold">${marker.device_type}</div>${marker.name}`)
      .setLatLng([lat, lon])
      .openOn(map)
  }

  const hidePopup = loc => map.closePopup()

  Object.keys(markerTypes).forEach(markerType => {
    const layer = L.featureGroup()
    markers
      .filter(marker => marker.device_type === markerType)
      .forEach(marker =>
        L.marker(marker.wgs84_geometry.coordinates, { icon: getMarkerIcon(marker) })
          .addTo(layer)
          .on('click', () => showInfo(marker))
          .on('mouseover', () => showPopup(marker))
          .on('mouseout', () => hidePopup(marker)))
    markerTypes[markerType].layer = layer
    markerGroup.addLayer(layer)
  })

  map.addLayer(markerGroup)
  homeButton(map)
  return markerGroup
}
