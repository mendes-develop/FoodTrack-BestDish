import React from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {addToFavorites} from '../fetch/Fetch'

export function RestaurantInfoWindow(props) {

  const dispatch = useDispatch()
  const selectedRestaurant = useSelector(state => state.selectedRestaurant)
  const favorites = useSelector(state => state.favoriteRestaurants)
  const {name, street_address, media_image} = selectedRestaurant
  
  const handleData = (data) =>{
    if (data.ok){
      dispatch({type: "ADD_TO_FAVORITES", payload: selectedRestaurant})
      alert(`Added ${name} Restaurant to favorites`)
    }else if (data.errors){
      alert(`${data.errors[0]}`)
    }
    
  }
  const handleClickFavorites = async () =>{
    console.log("adding to favorites")
    let data = await addToFavorites(selectedRestaurant.id)
    handleData(data)
  }

  const handleClickShowPage = () => {
    props.history.push(`restaurants/${selectedRestaurant.id}`)
   
  }

 


  return (
    <RestaurantDIV>
      <h3>{name}</h3>
      <img src={media_image} alt='restaurant' height="180" width="200"/>
      <p>{street_address}</p>
      <button onClick={handleClickShowPage}>Best Dishes</button>
      <button onClick={handleClickFavorites}>Add to Favorites</button>
    </RestaurantDIV>
  )       
}

const RestaurantDIV = styled.div`
border: 3px solid black
`
  