import L from 'leaflet'
import 'leaflet.markercluster'

import { mapHome } from './map'

const ICON_PATH = 'static/markers/'

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
    enabled: true
  },
  'Beacon': {
    id: 'Beacon',
    iconUrl: ICON_PATH + 'signpost-2x.png',
    name: 'Baken',
    enabled: true
  }
}

let clicker

let markerGroup

export function getMarkerType (thing) {
  return markerTypes[Object.keys(markerTypes).find(mt => mt === thing.device_type)]
}

function getMarkerIcon (marker) {
  const iconUrl = markerTypes[marker.device_type].iconUrl
  return L.icon({
    ...markerOptions,
    iconUrl
  })
}

export function cancelHighlight (map) {
  if (clicker) {
    map.removeLayer(clicker)
  }
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

export function onMap (map, id, where) {
  const HomeControl = L.Control.extend({

    options: {
      position: where
    },

    onAdd: function (map) {
      return L.DomUtil.get(id)
    }
  })
  map.addControl(new HomeControl())
}

function homeButton (map, onClick) {
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
        cancelHighlight(map)
        map.closePopup()
        onClick(null)
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
    const [lat, lon] = marker.wgs84_geometry.coordinates
    const markerType = getMarkerType(marker)
    L.popup({ offset: new L.Point(0, -20), autoPan: false })
      .setContent(`<div class="font-weight-bold">${markerType.name}</div>${marker.name}`)
      .setLatLng([lat, lon])
      .openOn(map)
  }

  const hidePopup = loc => map.closePopup()

  markerGroup = L.markerClusterGroup({
    disableClusteringAtZoom: 12,
    spiderfyOnMaxZoom: false
  })

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
    markerTypes[markerType].enabled = true
    markerGroup.addLayer(layer)
  })

  map.addLayer(markerGroup)
  homeButton(map, onClick)
  return markerGroup
}
