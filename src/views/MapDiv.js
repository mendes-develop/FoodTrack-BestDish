import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import { WrappedMap } from '../components/Map'
import {useDispatch, useSelector} from 'react-redux'
import {getRestaurants} from '../fetch/Fetch'
import { Container, Row, Col, InputGroup, FormGroup, Button, FormControl } from 'react-bootstrap';

const key = process.env.REACT_APP_GOOGLE_KEY ? process.env.REACT_APP_GOOGLE_KEY : ''

export default function MapDiv(){

  const dispatch = useDispatch()
  const [text, setText] = useState("")
  const restaurants = useSelector(state => state.restaurants)

  // const changeTextField = (e) => {
  //   setText(e.target.value)
  //   let filteredRestaurants = restaurants.filter(restaurant => restaurant.name.includes(text))
  //   dispatch({type: "SET_RESTAURANTS", payload: filteredRestaurants})
  // }

  // const searchField = () => {
  //   return (
  //     <InputGroup className="mb-3">
  //       <FormControl placeholder="Search" value={text} onChange={(e) => changeTextField(e)}/>
  //       <InputGroup.Append>
  //         <Button variant="outline-secondary">Button</Button>
  //       </InputGroup.Append>
  //     </InputGroup>
  //   )
  // }

  useEffect(() => {

    async function loadRestaurants(){
      const data = await getRestaurants()
      dispatch({type: "SET_RESTAURANTS", payload: data})
    }
    
    loadRestaurants()
    
  }, [dispatch])

  return (
    <Container fluid={true} style={{"paddingRight": "0px", "paddingLeft": "0px", "height" : "91vh", "overflow" : "hidden"}}>
      <Row style={{"paddingLeft": "10px", "height" : "100%"}}>
        <Col lg={3} md={3} xl={3} style={{"paddingBottom" : "20px", "paddingRight": "0px", "marginTop" : "10px", height: '100%'}}>
          <SideBar/>
        </Col>
        <Col lg={9} md={9} xl={9} style={{ height: '100%'}}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
            loadingElement={<div style={{ height: '100%'}} />}
            containerElement={<div style={{ height: '100%'}} />}
            mapElement={<div style={{height: '100%'}} />}
            
          />
        </Col>
      </Row>
    </Container>
  )

    // ${process.env.REACT_APP_GOOGLE_KEY}
    // return (
    //     <MapContainer className='map-container'>
    //       <SideBar/>
    //       <WrappedMap
    //         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
    //         loadingElement={<div style={{ height: '100%'}} />}
    //         containerElement={<div style={{ height: '100%'}} />}
    //         mapElement={<div style={{height: '100%'}} />}
    //       />
    //     </MapContainer>
     
    // )
}


// const MapContainer = styled.div`

//   border: 3px solid green;
//   width: 100vw;
//   height: 50vw;
//   margin: auto
  


// `
//${process.env.REACT_APP_GOOGLE_KEY}
