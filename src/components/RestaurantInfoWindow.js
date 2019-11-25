import React from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'

export function RestaurantInfoWindow({name, address, url}) {

  const dispatch = useDispatch()
  const selectedRestaurant = useSelector(state => state.selectedRestaurant)
  const favorites = useSelector(state => state.favoritesRestaurants)
  
  const handleClick = () =>{

    dispatch({type: "ADD_TO_FAVORITES", payload: selectedRestaurant})
    alert(`Added ${name} Restaurant to favorites`)
    console.log(favorites)

  }

 


  return (
    <RestaurantDIV>
      <h3>{name}</h3>
      <img src={url} alt='restaurant' height="180" width="200"/>
      <p>{address}</p>
      <button>Best Dishes</button>
      <button onClick={handleClick}>Add to Favorites</button>
    </RestaurantDIV>
  )       
}

const RestaurantDIV = styled.div`
border: 3px solid black
`
  