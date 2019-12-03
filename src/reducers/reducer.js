

let initialState = {
    currentUser: null,
    restaurants: [],
    selectedRestaurant: {
        id: 61,
        name:"The Ice Cream Shop",
        city:"New York",
        state:"NY",
        postal_code:"10009",
        street_address:"115 Avenue A",
        latitude:"40.72636032",
        longitude:"-73.98357392",
        price_rating:0,
        media_image:"https://res.cloudinary.com/grubhub/image/upload/wixgqbnk8gxqhvvhzsrl.jpg",
        logo:"https://res.cloudinary.com/grubhub/image/upload/xhcficcvfbfx5qwxehsh.jpg",
        dishes: [
            {id:132,
            name:"Chicken Quesadilla",
            description:"An extra large flour tortilla filled with melty three-cheese blend, fire grilled chicken, creamy jalapeño sauce folded and grilled to perfection.",
            price:4}
        ]
    },
    selectedDish: null,
    favoriteRestaurants: [],
    modal: true

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
        case "SET_SELECTED_DISH" :
            return {
                ...state,
                selectedDish: action.payload
            }
        case "SWITCH_MODAL" :
            return {
                ...state,
                modal: !state.modal
            }
        case "SET_FAVORITES" :
            console.log(action.payload)
            return {
                ...state,
                favoriteRestaurants: action.payload
            }
        default :return state
    }
    
}

 