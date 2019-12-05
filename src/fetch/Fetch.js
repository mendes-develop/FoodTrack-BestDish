
let url = 'http://localhost:3000/'

export const loginUser = (username, password) => {
    return (
        fetch(url + `login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(resp => resp.json())
        .then(data => data)
    )  
}

export const createUser =  (username, email, password, password_confirmation) => {
    return (
        fetch(url + `signup`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password,
                password_confirmation
            })
        })
        .then(resp => resp.json())
        .then(data => data )
    )
}

export const getUser = () => {
    return (
        fetch(url + `profile`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
        .then(resp => resp.json())
        .then(data => data )
    )

}

export const getRestaurants = (location = "") => {
    return (
        fetch(url + `restaurants?query=${location}`, {
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': `Bearer ${localStorage.token}`
            }
        })
        .then(resp => resp.json())
        .then(data => data )
    )
}

export const addToFavorites = (restaurant_id) => {
    return (
        fetch(url + `favorites`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({restaurant_id})
        })
        .then(resp => resp.json())
        .then(data => data )
    )
}

export const deleteFromFavorites = (restaurant_id) => {
    return (
        fetch(url + `favorites/${restaurant_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
        .then(resp => resp.json())
        .then(data => data )
    )
}

export const getFavorites = () => {
    return (
        fetch(url + `favorites`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
        .then(resp => resp.json())
        .then(data => data )
    )
}

export const submitVote = (stars, comment, dish_id) => {
    return (
        fetch(url + `votes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                stars: stars,
                comment: comment,
                dish: dish_id
            })
        })
        .then(resp => resp.json())
        .then(data => data )
    )
}