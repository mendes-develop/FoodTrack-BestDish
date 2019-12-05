import { RestaurantInfoWindow } from './RestaurantInfoWindow';
import React, { useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import {useSelector, useDispatch} from 'react-redux'
import {Route} from 'react-router-dom'

function Map(){
  
  const restaurants =  useSelector(state => state.restaurants)
  const selectedRestaurant = useSelector(state => state.selectedRestaurant)

  const dispatch = useDispatch()

 return (
   <GoogleMap
     defaultZoom={12}
     defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
    >
      { restaurants.map(restaurant => (< Marker
        key={restaurant.id}
        position={{
          lat: parseFloat(restaurant.latitude),
          lng: parseFloat(restaurant.longitude)
        }}
        onClick={() => dispatch({type: "SET_SELECTED_RESTAURANT", payload: restaurant}) }
        />
      ))}

      { selectedRestaurant && (
        < InfoWindow
        position={{
          lat: parseFloat(selectedRestaurant.latitude),
          lng: parseFloat(selectedRestaurant.longitude)
        }}
        onCloseClick={() => dispatch({type: "SET_SELECTED_RESTAURANT", payload: null})}
        >
        <Route component={RestaurantInfoWindow}/>
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
