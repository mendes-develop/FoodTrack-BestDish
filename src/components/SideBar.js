import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'



export default function SideBar(){

  const restaurants = useSelector(state => state.restaurants)

    return (
      <ListDiv>
        <h2>List of restaurants</h2>
        <ul>
          {restaurants.map(restaurant => {
            return (<li key={restaurant.id}>{restaurant.name}</li>)
          })}
        </ul>
      </ListDiv>
    )
}

const ListDiv = styled.div`
  overflow: auto;
  float: bottom;
  height: 10%;

  .fixedNav {
    padding: 10px; /* Location of the box */
    left: 2%;
    top: 70%;
    /* width: 20%; Full width */
    /* height: 50%; Full height */
    /* Enable scroll if needed */ 
    
  }
`
