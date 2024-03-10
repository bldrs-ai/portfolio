import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl'; // Make sure to import Popup
import { useTheme } from '@mui/material/styles';
import useStore from './Store';

const Map = forwardRef((props, ref) => {
  const mapRef = useRef();
  const [activeMarker, setActiveMarker] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null); // New state for hovered marker
  const theme = useTheme()
  const { portfolio, portfolios, portfolioNumber, project, setProject } = useStore();

  const goToLocation = (lat, lng, zoom = 7) => {
    const map = mapRef.current.getMap();
    map.flyTo({ center: [lng, lat], zoom, essential: true, duration: 5000 });
  };

  const onMarkerClick = (markerId) => {
    setProject(markerId);
  };

  useImperativeHandle(ref, () => ({ goToLocation }));

  const markerStyle = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    cursor: 'pointer', // Added cursor pointer for better UX
  };

  return (
    <MapGL
      ref={mapRef}
      initialViewState={{ latitude: 47.3769, longitude: 8.5417, zoom: 6 }}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle={portfolio.map}
    >
      {portfolios[portfolioNumber].projects.map((element, index) => (
        <Marker key={index} latitude={element.lat} longitude={element.lng}>
          <div
            onMouseEnter={() => setHoveredMarker(index)} // Set hovered marker
            onMouseLeave={() => setHoveredMarker(null)} // Unset hovered marker
            onClick={() => onMarkerClick(index === activeMarker ? null : index)}
            style={markerStyle}

          >
            <div
              style={{
                ...markerStyle,
                backgroundColor: project === index ? theme.palette.secondary.main : theme.palette.primary.main,
                border: project === index ? `2px solid ${theme.palette.primary.main}` : `2px solid ${theme.palette.secondary.main}`,
              }}
            />
          </div>
          {hoveredMarker === index && (
            <Popup
              latitude={element.lat}
              longitude={element.lng}
              closeButton={false}
              closeOnClick={false}
              offsetTop={-30}
            >
              {/* Customize your popup content here */}
              <div style={{ color: theme.palette.text.primary }}>
                {element.name} {/* Assuming each element has a name property */}
              </div>
            </Popup>
          )}
        </Marker>
      ))}
    </MapGL>
  );
});

export default Map;
