import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons
//import markerIcon from "leaflet/dist/images/marker-icon.png"; Default icon
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Define the default marker icon configuration
const DefaultIcon = L.icon({
  iconUrl: "images/icon-location.svg",
  iconRetinaUrl: markerIconRetina, // Path to the high-resolution marker icon
  shadowUrl: markerShadow, // Path to the marker shadow
  iconSize: [30, 41], // Size of the icon [width, height]
  iconAnchor: [12, 41], // Anchor point for the icon (where it attaches to the map)
});

// Apply the default icon to all markers
L.Marker.prototype.options.icon = DefaultIcon;

// Component to update the map view
const ChangeView = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

// Main map component
const MapComponent = ({
  ipCoordinates,
}: {
  ipCoordinates: [number, number];
}) => {
  return (
    <MapContainer
      center={ipCoordinates}
      zoom={15} // Default zoom level
      style={{ height: "100vh", width: "100%" }}
    >
      {/* Add the map tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Automatically update the view when ipCoordinates change */}
      <ChangeView center={ipCoordinates} />

      {/* Add a marker to the map */}
      <Marker position={ipCoordinates}>
        <Popup>A default marker popup!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
