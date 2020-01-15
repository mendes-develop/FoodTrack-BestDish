import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import {ListGroup, InputGroup, FormControl, Button} from 'react-bootstrap'



export default function SideBar(){

  const restaurants = useSelector(state => state.restaurants)
  const dispatch = useDispatch()
  const [hovered, setHovered] = useState(null)

  const handleSelected = (restaurant) => {
    dispatch({type: "SET_SELECTED_RESTAURANT", payload: restaurant})
  }


 

    return (  
           <ListDiv>
        <ListGroup 
        as="ul"
        style={{"overflowY": "auto","height" : "100%"}}
        >
          {restaurants.map(restaurant => {
            return (<ListGroup.Item 
                  key={restaurant.id} 
                  value={restaurant.id} 
                  as="li" 
                  active={hovered === restaurant.id}
                  onMouseOver= {(e)=> setHovered(e.target.value)} 
                  onClick={(e) => handleSelected(restaurant)}>
              {restaurant.name}</ListGroup.Item>)
          })}
        </ListGroup>
        </ListDiv>

    )
}

const ListDiv = styled.div`
  overflow: auto;
  float: bottom;
  height: 100%;
`
