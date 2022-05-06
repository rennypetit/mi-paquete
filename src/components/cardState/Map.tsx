import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Map = ({coords, pointsShops}) => {
  const containerStyle = {
    width: '100%',
    height: '530px'
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC0rDh2qSpSBB6CjfBtWcBapHUyysEd5uA"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coords}
        zoom={13}
      >
        {
          pointsShops.map((point, index) => (
            <Marker
              icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
              position={point}
              key={index}
            />
          ))
        }
        <></>
      </GoogleMap>
  ) : <></>
}

export default Map;