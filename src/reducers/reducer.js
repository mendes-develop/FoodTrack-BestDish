let initialState = {
    currentUser: null,
    restaurants: [],
    selectedRestaurant: null,
    favoriteRestaurants: []

}

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
        default :return state
    }
    
}

 