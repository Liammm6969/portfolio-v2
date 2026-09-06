import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type FootprintLocationMapProps = {
  latitude: number
  longitude: number
  isPrecise: boolean
}

function FootprintLocationMap({ latitude, longitude, isPrecise }: FootprintLocationMapProps) {
  return (
    <div className="footprint-map" aria-label="Approximate footprint location map">
      <MapContainer center={[latitude, longitude]} zoom={isPrecise ? 12 : 5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker
          center={[latitude, longitude]}
          pathOptions={{ color: '#9ed4df', fillColor: '#9ed4df', fillOpacity: 0.8 }}
          radius={8}
        >
          <Popup>{isPrecise ? 'Device location shared for this session' : 'Approximate network location'}</Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  )
}

export default FootprintLocationMap