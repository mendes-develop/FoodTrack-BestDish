import React, {useEffect} from 'react';
// import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components'
import {getUser} from './fetch/Fetch.js'
import Navbar from './views/NavBar'
import Login from './views/Login'
import MapDiv from './views/MapDiv'
// import Default from './components/Default'
import {connect} from 'react-redux'

function App({currentUser, setUser}) {

  useEffect(() => {
    const handleData = (data) => {
      if (data){
        setUser(data.current_user)
      }
    }

    const handleToken = async () => {
      let user = await getUser()
      handleData(user)
    }
  
    if (localStorage.token) {
      handleToken()
    }
  },[setUser])


    return (
      <main>
        <Navbar/>
        { currentUser ? (
          <MapDiv/>
          ) : (
          <Login />
          ) }
      </main>

    )
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    setUser: (user) => {
      dispatch({type: "SET_USER", payload: user})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)