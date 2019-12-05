import React from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {addToFavorites} from '../fetch/Fetch'
import { Button, ButtonGroup, Row, Col, Container } from 'react-bootstrap';
import { useAlert } from "react-alert";

export function RestaurantInfoWindow(props) {

  const dispatch = useDispatch()
  const selectedRestaurant = useSelector(state => state.selectedRestaurant)
  const favorites = useSelector(state => state.favoriteRestaurants)
  const {name, street_address, logo} = selectedRestaurant
  const alert = useAlert()


  const handleData = (data) =>{
    if (data.ok){
      dispatch({type: "ADD_TO_FAVORITES", payload: selectedRestaurant})
      alert.success(`${name} was added to your favorites`)
    }else if (data.errors){
      alert.show(`${data.errors[0]}`)
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
      
      <img align="center" src={logo} alt='restaurant' height="171" width="180"/>
      <h5 align="center">{name}</h5>
      <p>{street_address}</p>
      
      <div className="d-flex flex-column">
        <ButtonGroup aria-label="Basic example" size="sm" className="mt-3">
          <Button variant="secondary" onClick={handleClickShowPage}>Best Dishes</Button>
            
          <Button variant="secondary" onClick={handleClickFavorites}>Add to Favorites</Button>
        </ButtonGroup>
      </div>
      
    </RestaurantDIV>
  )       
}

const RestaurantDIV = styled.div`
height: 300px;
width: 200px;
`
// <Container>
// <Row>
//   <Col lg="auto" md="auto" xl="auto"><Button onClick={handleClickShowPage}>Best Dishes</Button></Col>
//   <Col lg="auto" md="auto" xl="auto"><Button onClick={handleClickFavorites}>Add to Favorites</Button></Col>
// </Row>
// </Container>