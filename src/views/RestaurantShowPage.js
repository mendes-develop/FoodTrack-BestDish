import React, {useState} from "react"
import {useSelector, useDispatch} from 'react-redux'
import ModalPage from './ModalPage'

export default function RestaurantShowPage(props) {

    // const [show, setShow] = useState(true);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    const selectedRestaurant = useSelector(state => state.selectedRestaurant)

    const handleClick = (dish) => {
        dispatch({type: "SET_SELECTED_DISH", payload: dish})
        dispatch({type: "SWITCH_MODAL"})
    }

    const dishes = () => {
            let dishes = selectedRestaurant.dishes.map(dish => (
                <div key={dish.id}>
                    <div>
                        <img src="" alt="food"/>
                        <h5>{dish.name}</h5>
                        <p>{dish.description}</p>
                    </div>
                    <div>
                        <span role="img" alt="starts">⭐️⭐️⭐️⭐️⭐️</span>
                        <p>Ratings</p>
                        <p>${dish.price}</p>
                    </div>
                    <div><button onClick={() => handleClick(dish)}>Rate Dish</button></div>
                </div>
            )) 
            return dishes
    }

    return (
        <>
        {selectedRestaurant ? (
            <div>
               <ModalPage/>
                <h2>Hello, from RestaurantShowPage</h2>
                <div>
                    <img src={selectedRestaurant.logo} width="350" height="200" alt='restaurant'/>
                    <h3>{selectedRestaurant.name}</h3>
                    <p>{selectedRestaurant.street_address}</p>
                    <p>{'$'.repeat(selectedRestaurant.price_rating)}</p>
                </div>
                <div><button>Added to Favorites</button></div>
                <div>
                    {dishes()}
                </div>
                
            
            </div>
        ) : (<div>No restaurant selected</div>)}
        </>
    )

}