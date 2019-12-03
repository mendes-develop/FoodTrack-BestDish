import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getFavorites} from '../fetch/Fetch.js'
// import { RestaurantInfoWindow } from '../components/RestaurantInfoWindow'

export default function FavoritesPage(props){

    const favoriteRestaurants = useSelector(state => state.favoriteRestaurants)
    const dispatch = useDispatch()

    useEffect(()=> {

        const handleFavorites = async () =>{
            console.log("Searching for favorites")
            let data = await getFavorites()
            console.log(data)
            dispatch({type: "SET_FAVORITES", payload: data})
        }

        if (localStorage.token) {
            handleFavorites()
        }
        
    }, [dispatch])

    const displayRestaurants = () => {
        if (favoriteRestaurants.length > 0) {
            let list = favoriteRestaurants.map(favorite => <li key={favorite.id}>{favorite.restaurant.name}</li>)
            return list
        } else { return (<li>You have no favorites added yet</li>) }
    }


    return (
        <div>
            <h3>Favorite restaurants</h3>
            <button onClick={ ()=> props.history.goBack()}>Go back</button>
            <ul>
                {localStorage.token ? displayRestaurants() : <li>You are not logged in</li>}
            </ul>
        </div>
    )
}