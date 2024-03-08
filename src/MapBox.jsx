import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { useTheme } from '@mui/material/styles';
import useStore from './Store';

const Map = forwardRef((props, ref) => {
  const mapRef = useRef();
  const [activeMarker, setActiveMarker] = useState(null);
  const theme = useTheme()
  const {portfolio, portfolios, portfolioNumber} = useStore();

  const goToLocation = (lat, lng, zoom = 7) => {
    const map = mapRef.current.getMap();
    map.flyTo({ center: [lng, lat], zoom, essential: true, duration: 5000});
    console.log('zoom', zoom)

  };

  const onMarkerClick = (markerId) => {
    setActiveMarker(markerId);
  };

  useImperativeHandle(ref, () => ({ goToLocation }));

  const markerStyle = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
  };

  return (
    <MapGL
      ref={mapRef}
      initialViewState={{ latitude: 47.3769, longitude: 8.5417, zoom: 3 }}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle={portfolio.map}
    >
      {
        portfolios[portfolioNumber].projects.map((project, index) => (
        <Marker latitude={project.lat} longitude={project.lng}>
          <button onClick={() => {
            if(activeMarker === index){
              onMarkerClick(null)
            }else{
              onMarkerClick(index)
            }
          }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <div
              style={{
                ...markerStyle,
                backgroundColor: activeMarker === index ? theme.palette.secondary.main : theme.palette.primary.main,
                border: activeMarker === index ? `2px solid ${theme.palette.primary.main}` : `2px solid ${theme.palette.secondary.main}`,
              }}
            />
          </button>
        </Marker>
        ))
      }
      {/* <Marker latitude={47.3769} longitude={8.5417}>
        <button onClick={() => {
          if(activeMarker === 'marker1'){
            onMarkerClick('')
          }else{
            onMarkerClick('marker1')
          }
        }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <div
            style={{
              ...markerStyle,
              backgroundColor: activeMarker === 'marker1' ? theme.palette.secondary.main : theme.palette.primary.main,
              border: activeMarker === 'marker1' ? `2px solid ${theme.palette.primary.main}` : `2px solid ${theme.palette.secondary.main}`,
            }}
          />
        </button>
      </Marker> */}
      {/* You can add more markers here */}
    </MapGL>
  );
});

export default Map;


