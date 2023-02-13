import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const params = useParams();

  const restaurant = useRestaurant(params.id);

  if (!restaurant) {
    return <Shimmer />;
  }
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="flex">
        <div>
          <img
            src={IMG_CDN + restaurant?.cloudinaryImageId}
            className="restaurantImg"
          />
          <div className="">
            <h2>{restaurant.name}</h2>
            <h2>{restaurant.cuisines}</h2>
            <h2>
              {restaurant.area} , {restaurant.areaSlug}
            </h2>
            <div className="flex my-3 p-5">
              <h2 className="mx-3">{restaurant.avgRating} </h2>
              <h2 className="mx-3">{restaurant.totalRatingsString}</h2>
              <h2 className="mx-3">{restaurant.costForTwoMsg}</h2>
              <h2 className="mx-3">{restaurant?.sla?.deliveryTime} mins</h2>
            </div>
          </div>
        </div>

        <h1> Menu </h1>
        <div className="flex ml-3">
          <ul>
            {Object.values(restaurant?.menu?.items).map((items) => {
              return (
                <div className="flex gap-5 m-6">
                  <li key={items.id}> {items.name}</li>
                  <button
                    className="border-stone-400 bg-slate-300 "
                    onClick={()=>handleAddItem(item)}
                  >
                    Add item
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
