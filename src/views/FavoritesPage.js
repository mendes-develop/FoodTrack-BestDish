import React from 'react'
import {useSelector} from 'react-redux'

export default function FavoritesPage(props){

    const favoriteRestaurants = useSelector(state => state.favoriteRestaurants)

    return (
        <div>
            <h3>Favorite restaurants</h3>
            <button onClick={ ()=> props.history.goBack()}>Go back</button>
            <ul>
                {favoriteRestaurants.length > 0 ? favoriteRestaurants.map(restaurant => (
                    <li>{restaurant.name}</li>
                    )): <li>You have no favorites added yet</li>}
            </ul>
        </div>
    )
}