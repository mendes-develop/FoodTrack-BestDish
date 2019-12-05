import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getFavorites} from '../fetch/Fetch.js'
import { Container, CardColumns, Card, Button } from 'react-bootstrap';
// import { RestaurantInfoWindow } from '../components/RestaurantInfoWindow'

export default function FavoritesPage(props){

    const favoriteRestaurants = useSelector(state => state.favoriteRestaurants)
    const dispatch = useDispatch()

    useEffect(()=> {
        const handleFavorites = async () =>{
            let data = await getFavorites()
            dispatch({type: "SET_FAVORITES", payload: data})
        }

        if (localStorage.token) {
            handleFavorites()
        } 
    }, [dispatch])
    // <li key={favorite.id}>{favorite.restaurant.name}</li>

    const handleClick = (favorite) => {
        dispatch({type: "SET_SELECTED_RESTAURANT", payload: favorite.restaurant})
        setTimeout(function(){props.history.push(`restaurants/${favorite.restaurant.id}`); }, 1000);
        
    }

    const displayRestaurants = () => {
        if (favoriteRestaurants.length > 0) {
            let list = favoriteRestaurants.map(favorite => (
                <Card key={favorite.restaurant.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={favorite.restaurant.logo} />
                    <Card.Body>
                        <Card.Title>{favorite.restaurant.name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="info" onClick={() => handleClick(favorite)}>See Best Dishes</Button>
                    </Card.Body>
                </Card>
            ))
            return list
        } else { return (<h5>You have no favorites added yet</h5>) }
    }

    return(
        <Container>
        <h3>Favorites restaurants</h3>
                <button onClick={ ()=> props.history.goBack()}>Go back</button>
                <CardColumns>
                    {localStorage.token ? displayRestaurants() : <h5>You are not logged in</h5>}
                </CardColumns>
        </Container>
    )
    // return (
    //     <div>
    //         <h3>Favorite restaurants</h3>
    //         <button onClick={ ()=> props.history.goBack()}>Go back</button>
    //         <ul>
    //             {localStorage.token ? displayRestaurants() : <li>You are not logged in</li>}
    //         </ul>
    //     </div>
    // )
}