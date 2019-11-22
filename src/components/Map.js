import { RestaurantInfoWindow } from './RestaurantInfoWindow';
import React, { useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { data } from '../db'
import {useSelector, useDispatch} from 'react-redux'

function Map(){
  const restaurants =  useSelector(state => state.restaurants)
  const selectedRestaurant = useSelector(state => state.selectedRestaurant)

  const dispatch = useDispatch()

  useEffect(() => {
    //fetching at some point
    dispatch({type: "SET_RESTAURANTS", payload: data})
  }, [dispatch])


 return (
   <GoogleMap
     defaultZoom={13}
     defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
    >
      { restaurants.map(restaurant => (< Marker
        key={restaurant.restaurant_id}
        position={{
          lat: parseFloat(restaurant.address.latitude),
          lng: parseFloat(restaurant.address.longitude)
        }}
        onClick={() => dispatch({type: "SET_SELECTED_RESTAURANT", payload: restaurant}) }
        />
      ))}

      { selectedRestaurant && (
        < InfoWindow
        position={{
          lat: parseFloat(selectedRestaurant.address.latitude),
          lng: parseFloat(selectedRestaurant.address.longitude)
        }}
        onCloseClick={() => dispatch({type: "SET_SELECTED_RESTAURANT", payload: null})}
        >
          <RestaurantInfoWindow name={selectedRestaurant.name} address={selectedRestaurant.address.street_address} url={selectedRestaurant.media_image.base_url + selectedRestaurant.media_image.public_id}     />
        </InfoWindow>
      )}

   </GoogleMap>
 );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));

// function mapStateToProps(state){
//   return {
//     restaurants: state.restaurants,
//     selectedRestaurant: state.selectedRestaurant
//   }
// }

// function mapDispatchToProps(dispatch){
//   return {
//     setRestaurants: (restaurants) => {
//       dispatch({type: "SET_RESTAURANTS", payload: restaurants})
//     },
//     setSelectedRestaurant: (restaurant) => {
//       dispatch({type: "SET_SELECTED_RESTAURANT", payload: restaurant})
//     }
//   }
// }

// Create default canvas using GoogleMap component and stablish default values
// Create WrappedMap variable and assign it to a function imported from 'react-google-maps'
// withScriptjs() takes withGoogleMap() as a callback which has the return of Map()
// import Marker and change its attributes based on each choice
/* Use of hooks*/
