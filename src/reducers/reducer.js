// {
//     "id": 198,
//     "name": "Sri Thai",
//     "city": "Hoboken",
//     "state": "NJ",
//     "postal_code": "07030",
//     "street_address": "234 Bloomfield St",
//     "latitude": "40.740088",
//     "longitude": "-74.031188",
//     "price_rating": 1,
//     "media_image": "https://res.cloudinary.com/grubhub/image/upload/ingyggcqqbpfz47zaolb.jpg",
//     "logo": "https://res.cloudinary.com/grubhub/image/upload/qclgro7hiwqz1kurdjix.jpg",
//     "dishes": [
//     {
//     "id": 594,
//     "name": "See-ew",
//     "description": "Stir-fried rice noodle with broccoli and egg.",
//     "price": 11
//     },
//     {
//     "id": 593,
//     "name": "Vegetable Paw Pia | Spring Roll (3 rolls)",
//     "description": "Thai spring rolls with vegetable. Served with plum sauce. ",
//     "price": 6
//     },
//     {
//     "id": 592,
//     "name": "Pad Thai",
//     "description": "Sauteed rice noodle with egg, bean sprouts and ground peanuts. ",
//     "price": 11
//     }
//     ]
//     }

let initialState = {
    currentUser: null,
    restaurants: [],
    selectedRestaurant:null,
    selectedDish: null,
    favoriteRestaurants: [],
    modal: false,
    city: ''

}

// const checkDeletedFavorite = (id) => {
//     return id !== 
// }

export default function reducer(state = initialState, action){
    switch (action.type) {
        case "SET_USER" : 
            return {
                ...state,
                currentUser: action.payload
            }
        case "SET_RESTAURANTS": 
            return {
                ...state,
                restaurants: action.payload
            }
        case "SET_SELECTED_RESTAURANT" :
            return {
                ...state,
                selectedRestaurant: action.payload
            }
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favoriteRestaurants: [...state.favoriteRestaurants, action.payload]
            }
        case "REMOVE_FROM_FAVORITES":
            return {
                ...state,
                favoriteRestaurants: state.favoriteRestaurants.filter( fav => fav.id !== action.payload.id)
            }
        case "SET_SELECTED_DISH" :
            return {
                ...state,
                selectedDish: action.payload
            }
        case "SWITCH_MODAL" :
            return {
                ...state,
                modal: !(state.modal)
            }
        case "SET_FAVORITES" :
            return {
                ...state,
                favoriteRestaurants: action.payload
            }
        case "SET_CITY" :
            return {
                ...state,
                city: action.payload
            }
        default :return state
    }
    
}

 