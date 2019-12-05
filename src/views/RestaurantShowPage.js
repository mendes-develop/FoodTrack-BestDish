import React, {useState} from "react"
import {useSelector, useDispatch} from 'react-redux'
import ModalPage from './ModalPage'
import { Button, ButtonGroup, Row, Col, Container } from 'react-bootstrap';
import foodImage from '../food-image.svg'
import {addToFavorites, deleteFromFavorites} from '../fetch/Fetch'
import { useAlert } from "react-alert";


export default function RestaurantShowPage(props) {

    // const [show, setShow] = useState(true);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const alert = useAlert()
    const selectedRestaurant = useSelector(state => state.selectedRestaurant)
    const favoritesRestaurantsIDs = useSelector(state => state.favoriteRestaurants.map(fav => fav.restaurant.id))

    const handleClick = (dish) => {
        dispatch({type: "SET_SELECTED_DISH", payload: dish})
        dispatch({type: "SWITCH_MODAL"})
    }

    const handleData = (data) =>{
        if (data.id){
          dispatch({type: "ADD_TO_FAVORITES", payload: data})
          alert.success(`${selectedRestaurant.name} was added to your favorites`)
        }else if (data.errors){
          alert.show(`${data.errors[0]}`)
        }
        
    }

    const handleClickFavorites = async () => {
        console.log("adding to favorites")
        let data = await addToFavorites(selectedRestaurant.id)
        handleData(data)
    }

    const handleDeleteData = (data) => {
        if (data.id){
            dispatch({type: "REMOVE_FROM_FAVORITES", payload: data})
            alert.show(`The Restaurant was removed from favorites`)
          } else if (data.errors){
            alert.show(`${data.errors[0]}`)
        }
    }

    const handleDelete = async (id) => {
        let data = await deleteFromFavorites(id)
        handleDeleteData(data)
    }

    window.scrollTo(0, 0)


    const dishes = () => {
            let dishes = selectedRestaurant.dishes.map(dish => (
                <React.Fragment key={dish.id}>
                <hr/>
                <Row key={dish.id}>
                    <Col>
                        <img src={foodImage} width="100" height="100" alt="food"/>
                    </Col>
                    <Col>
                        <h6>{dish.name}</h6>
                        <p>{dish.description}</p>
                    </Col>
                    <Col>
                        <span role="img" alt="starts">⭐️⭐️⭐️⭐️⭐️</span>
                        <p>Ratings</p>
                    </Col>
                    <Col>
                        <p>${dish.price}</p>
                    </Col>
                    <Col><Button variant="success" onClick={() => handleClick(dish)}>Rate Dish</Button></Col>
                </Row>
                </React.Fragment>
            )) 
            return dishes
    }

    return (
        <React.Fragment>
        {selectedRestaurant ? (
            <Container>
            <ModalPage/>
                <br/>
                <Row className="justify-content-md-center" > 
                    <Col>
                        <img src={selectedRestaurant.logo} width="300" height="200" alt='restaurant'/>
                    </Col>
                    <Col>
                        <div>
                            <h3>{selectedRestaurant.name}</h3>
                            <p>{selectedRestaurant.street_address}</p>
                            <p>{'$'.repeat(selectedRestaurant.price_rating)}</p>
                        </div>
                    </Col>   
                    <Col lg={{offset: 1} }>
                        {favoritesRestaurantsIDs.includes(selectedRestaurant.id) ? (
                            <Button onClick={() => handleDelete(selectedRestaurant.id)} variant="danger">Remove from Favorites</Button>) : (
                            <Button onClick={() => handleClickFavorites()} variant="primary">Add to Favorites</Button>
                        )}   
                    </Col>
                </Row>
                <br/>
                {dishes()}
            </Container>
            
        ) : (<Button onClick={props.history.push('/restaurants')} variant="secondary" size="lg" block>
                No Restaurant selected, go back to the search page.
            </Button>)
        }
        </React.Fragment>
    )

    // return (
    //     <>
    //     {selectedRestaurant ? (
    //         <div>
    //            <ModalPage/>
    //             <h2>Hello, from RestaurantShowPage</h2>
    //             <div>
    //                 <img src={selectedRestaurant.media_image} width="350" height="200" alt='restaurant'/>
    //                 <h3>{selectedRestaurant.name}</h3>
    //                 <p>{selectedRestaurant.street_address}</p>
    //                 <p>{'$'.repeat(selectedRestaurant.price_rating)}</p>
    //             </div>
    //             <div><button>Added to Favorites</button></div>
    //             <div>
    //                 {dishes()}
    //             </div>
                
            
    //         </div>
    //     ) : (<div>No restaurant selected</div>)}
    //     </>
    // )

}