
import RestaurantCard from "./RestaurentCard";
import searchIcon from "../../images/search.png";
import React, { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import useIsOnline from "../utils/useIsOnline";

export default Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const isOnline = useIsOnline()


  const handelSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handelSearch = () => {
    let filteredRestaurant = restaurantList.filter((restaurant) => {
      if (
        restaurant.data.name.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return restaurant;
      }
    });

    setFilteredRestaurantList(filteredRestaurant);
  };

  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6159783&lng=77.3772303&page_type=DESKTOP_WEB_LISTING"
    )
      .then(async (data) => await data.json())
      .then((parsedData) => {
        console.log(parsedData);
        setRestaurantList(parsedData?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurantList(
          parsedData?.data?.cards[2]?.data?.data?.cards
        );
      });
  }, []);


  if(!isOnline){
    return (
      <h1>Opps!! Please check your internet connection</h1>
    )
  }

  if(!restaurantList) return null;

  return (
    <section className="section">
      <div className="flex flex-col">
        <div className="flex justify-center m-3">
        
          <input
            type="text"
            placeholder="Search here"
            className="border-solid border-2  border-gray-500 rounded-lg"
            value={searchValue}
            onChange={handelSearchValue}
          />
          <img
            src={searchIcon}
            alt="search icon"
            className="w-10 h-10"
            onClick={handelSearch}
          />
        </div>
      
        <div className="flex flex-wrap justify-center">
          {restaurantList?.length > 0 ? (
            filteredRestaurantList.length > 0 ? (
              filteredRestaurantList.map((restaurant) => {
                return (
                  <RestaurantCard
                    key={restaurant?.data?.id}
                    name={restaurant?.data?.name}
                    cloudinaryImageId={restaurant.data.cloudinaryImageId}
                    area={restaurant.data.area}
                    cuisines={restaurant.data.cuisines.join(", ")}
                    costForTwoString={restaurant.data.costForTwoString}
                    slaString={restaurant.data.slaString}
                    totalRatingsString={restaurant.data.totalRatingsString}
                    id ={restaurant?.data?.id}
                  />
                );
              })
            ) : (
              <h1>No data found </h1>
            )
          ) : (
            <Shimmer />
          )}
        </div>
      </div>
    </section>
  );
};
