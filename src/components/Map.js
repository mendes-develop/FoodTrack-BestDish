import { RestaurantInfoWindow } from './RestaurantInfoWindow';
import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { data } from '../db'

function Map(){

  const [restaurants, setRestaurants] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)

  useEffect(() => {
    setRestaurants(data)
  }, [])


 return (
   <GoogleMap
     defaultZoom={10}
     defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
    >
      { restaurants.map(restaurant => (< Marker
        key={restaurant.restaurant_id}
        position={{
          lat: restaurant.address.latitude,
          lng: restaurant.address.longitude
        }}
        onClick={() => setSelectedRestaurant(restaurant) }
        />
      ))}

      { selectedRestaurant && (
        < InfoWindow
        position={{
          lat: selectedRestaurant.address.latitude,
          lng: selectedRestaurant.address.longitude
        }}
        onCloseClick={() => setSelectedRestaurant(null) }
        >
          <RestaurantInfoWindow name={selectedRestaurant.name} address={selectedRestaurant.address.street_address} url={selectedRestaurant.media_image.base_url + selectedRestaurant.media_image.public_id}     />
        </InfoWindow>
      )}

   </GoogleMap>
 );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));



// Create default canvas using GoogleMap component and stablish default values
// Create WrappedMap variable and assign it to a function imported from 'react-google-maps'
// withScriptjs() takes withGoogleMap() as a callback which has the return of Map()
// import Marker and change its attributes based on each choice
/* Use of hooks*/
