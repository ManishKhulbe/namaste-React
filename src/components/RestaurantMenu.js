import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  const params = useParams();
  
const restaurant = useRestaurant(params.id)

  if(!restaurant){
    return <Shimmer />
  }

  return (
    <>
      <div className="restaurantMenuContainer">
        <img src={IMG_CDN + restaurant?.cloudinaryImageId} className="restaurantImg" />
        <div className="restaurantMenu">
          <h2>{restaurant.name}</h2>
          <h2>{restaurant.cuisines}</h2>
          <h2>
            {restaurant.area} , {restaurant.areaSlug}
          </h2>
          <div className="restaurantAdditional">
            <h2>{restaurant.avgRating} </h2>
            <h2>{restaurant.totalRatingsString}</h2>
            <h2>{restaurant.costForTwoMsg}</h2>
            <h2>{restaurant?.sla?.deliveryTime} mins</h2>
          </div>
        </div>
      <h1> Menu </h1>
      <div className="restaurantMenu">
        <ul>
          {Object.values(restaurant?.menu?.items).map((items) => {
            return <li key={items.id}> {items.name}</li>;
          })}
        </ul>
      </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
