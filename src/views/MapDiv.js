import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
//
import { WrappedMap } from '../components/Map'


export default function MapDiv(){

  // .map-container {
   // margin: auto;
  // float: left
// }
    return (
        <MapContainer className='map-container'>
          <SideBar/>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
            loadingElement={<div style={{ height: '100%'}} />}
            containerElement={<div style={{ height: '100%'}} />}
            mapElement={<div style={{height: '100%'}} />}
          />
        </MapContainer>
     
    )
}


const MapContainer = styled.div`

  border: 3px solid green;
  width: 100vw;
  height: 50vw;
  margin: auto
  


`
//${process.env.REACT_APP_GOOGLE_KEY}
