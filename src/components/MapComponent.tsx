import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Define the default marker icon configuration
const DefaultIcon = L.icon({
  iconUrl: markerIcon, // Path to the default marker icon
  iconRetinaUrl: markerIconRetina, // Path to the high-resolution marker icon
  shadowUrl: markerShadow, // Path to the marker shadow
  iconSize: [25, 41], // Size of the icon [width, height]
  iconAnchor: [12, 41], // Anchor point for the icon (where it attaches to the map)
});

// Apply the default icon to all markers
L.Marker.prototype.options.icon = DefaultIcon;

// Main map component
const MapComponent = () => {
  return (
    <MapContainer
      // Set the default center of the map (latitude, longitude)
      // Modify these coordinates to change the starting location
      center={[51.505, -0.09]} // Example: London coordinates
      zoom={13} // Adjust zoom level (higher = more zoomed in)
      style={{ height: "100vh", width: "100%" }} // Adjust the map's height and width
    >
      {/* Add the map tiles */}
      <TileLayer
        // OpenStreetMap tile URL
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // Attribution to the map data provider (modify or remove if using a custom tile provider)
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add a marker to the map */}
      <Marker
        position={[51.505, -0.09]} // Marker position [latitude, longitude]
        // Modify these coordinates to place the marker at a specific location
      >
        {/* Popup that appears when clicking on the marker */}
        <Popup>
          A default marker popup!{" "}
          {/* Customize this text to display specific information */}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
