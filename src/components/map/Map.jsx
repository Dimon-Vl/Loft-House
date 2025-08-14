import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Map.scss';

export default function Map() {

  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <section className="map">
      <div className="map__container">
        <h3 className="map__title">
          Район на карті
        </h3>

        <MapContainer center={[50.4501, 30.5234]} zoom={13} style={{ height: '358px', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[50.4501, 30.5234]} icon={customIcon}>
            <Popup>
             Офіс Loft house
            </Popup>
          </Marker>
        </MapContainer>

      </div>
    </section>
  );
}
