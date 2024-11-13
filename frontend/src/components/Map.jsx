import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TextField, Autocomplete } from '@mui/material';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
import axios from 'axios';
import './Map.css';

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom hook to animate map to a new location
const AnimatedMapCenter = ({ position }) => {
  const map = useMap();
//   map.setView(position, 13, { animate: true });
map.flyTo(position, 13, { duration: 2 }); // Adjust 'duration' for a slower or faster animation
  return null;
};

const Map = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position
  const [inputValue, setInputValue] = useState(''); // Search input
  const [options, setOptions] = useState([]); // Autocomplete options

  // Function to fetch location suggestions from Nominatim API
  const fetchLocationSuggestions = async (query) => {
    if (!query) return;
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: query,
          format: 'json',
          addressdetails: 1,
          limit: 5,
        },
      });
      const locations = response.data.map((result) => ({
        label: result.display_name,
        lat: parseFloat(result.lat),
        lon: parseFloat(result.lon),
      }));
      setOptions(locations);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  // Handle input change for fetching suggestions
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    fetchLocationSuggestions(newInputValue);
  };

  // Handle location selection
  const handleLocationSelect = (event, newValue) => {
    if (newValue) {
      const newPosition = [newValue.lat, newValue.lon];
      setPosition(newPosition);
    }
  };

  return (
    <div className="map-container">
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onChange={handleLocationSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a location"
            variant="outlined"
            fullWidth
          />
        )}
        style={{ marginBottom: '20px', width: '560px' }}
      />

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '50vh', width: '100%', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Animate the map to the new center when position updates */}
        <AnimatedMapCenter position={position} />

        <Marker position={position} icon={markerIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;





















