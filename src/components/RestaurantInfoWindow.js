import React from "react";

export function RestaurantInfoWindow({name, address, url}) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={url} alt='restaurant' height="180" width="300"/>
      <p>{address}</p>
      <button>Best Dishes</button>
      <button>Add to Favorites</button>
    </div>
  )       
}
  