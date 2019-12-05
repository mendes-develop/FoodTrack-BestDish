import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components'
import {getUser, getFavorites} from './fetch/Fetch.js'
import Navbar from './views/NavBar'
import Login from './views/Login'
import MapDiv from './views/MapDiv'
import BoxSearch from './views/BoxSearch'
import Default from './views/Default'
import FavoritesPage from './views/FavoritesPage'
import RestaurantShowPage from './views/RestaurantShowPage'
// import ModalPage from './views/ModalPage'


function App() {

  const currentUser = useSelector(state => state.currentUser)
  // const city = useSelector(state => state.city)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleData = (data) => {
      if (data){
        dispatch({type: "SET_USER", payload: data.current_user})
        handleFavorites()
      }
    }

    const handleFavorites = async () =>{
      let data = await getFavorites()
      dispatch({type: "SET_FAVORITES", payload: data})
  }

    const handleToken = async () => {
      let user = await getUser()
      handleData(user)
    }

    // const handleFavorites = async () =>{
    //   let data = await getFavorites()
    //   console.log(data)
    //   dispatch({type: "SET_FAVORITES", payload: data})
    // }
  
    if (localStorage.token) {
      handleToken()
      // handleFavorites()
    }

  },[dispatch])


    return (
      <>
        <Route component={Navbar}/>
        <Switch>
          <Route exact path={'/'} component={BoxSearch}/>
          <Route exact path={'/restaurants'} component={MapDiv}/>
          <Route exact path={'/login'} component={Login}/>
          <Route exact path={'/favorites'} component={FavoritesPage}/>
          <Route exact path={'/restaurants/:id'} component={RestaurantShowPage}/>
          <Route default component={Default}/>
        </Switch>
      </>
      
      

    )
}

// function mapStateToProps(state){
//   return {
//     currentUser: state.currentUser
//   }
// }

// function mapDispatchToProps(dispatch){
//   return {
//     setUser: (user) => {
//       dispatch({type: "SET_USER", payload: user})
//     }
//   }
// }

export default (App)