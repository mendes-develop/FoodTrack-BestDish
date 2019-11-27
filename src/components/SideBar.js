import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'



export default function SideBar(){

  const restaurants = useSelector(state => state.restaurants)

    return (
      <ListDiv>
      <div className='fixedNav'>
        <h2>List of restaurants</h2>
        <ul>
          {restaurants.map(restaurant => {
            return (<li key={restaurant.id}>{restaurant.name}</li>)
          })}
        </ul>
      </div>
      </ListDiv>

    )
}

const ListDiv = styled.div`
.fixedNav {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding: 10px; /* Location of the box */
  left: 2%;
  top: 70%;
  /* width: 20%; Full width */
  /* height: 50%; Full height */
  overflow: auto; /* Enable scroll if needed */ 
  background-color: #fefefe;  
}
`
