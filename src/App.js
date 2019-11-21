import React, {useState} from 'react';
// import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components'

import Navbar from './components/NavBar'
import Login from './components/Login'
import MapPage from './components/MapPage'
// import Default from './components/Default'



export default function App() {

  const [token, setToken] = useState(null)

  const addToken = (token) => {
    setToken(token)
  }
  
    return (
      <main>
        <Navbar/>
        { token ? (
          <MapPage/>
          ) : (
          <Login/>
          ) }
      </main>

    )
}

