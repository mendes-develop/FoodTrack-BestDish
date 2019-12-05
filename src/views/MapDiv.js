import React, {useEffect} from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import { WrappedMap } from '../components/Map'
import {useDispatch} from 'react-redux'
import {getRestaurants} from '../fetch/Fetch'
import { Container, Row, Col } from 'react-bootstrap';



export default function MapDiv(){

  const dispatch = useDispatch()

  useEffect(() => {

    async function loadRestaurants(){
      const data = await getRestaurants()
      dispatch({type: "SET_RESTAURANTS", payload: data})
    }
    
    loadRestaurants()
    
  }, [dispatch])

  return (
    <Container fluid={true} style={{"paddingRight": "0px", "paddingLeft": "0px", "height" : "90vh", "overflow" : "hidden"}}>
      <Row>
        <Col lg={3} md={3} xl={3}>
          <SideBar/>
        </Col>
        <Col lg={9} md={9} xl={9}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
            loadingElement={<div style={{ height: '100%'}} />}
            containerElement={<div style={{ height: '10%'}} />}
            mapElement={<div style={{height: '85%'}} />}
          />
        </Col>
      </Row>
    </Container>
  )

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
