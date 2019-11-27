import React, {useEffect} from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import { WrappedMap } from '../components/Map'
import {useDispatch} from 'react-redux'
import {getRestaurants} from '../fetch/Fetch'


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
