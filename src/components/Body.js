import restaurantList from "../constant";
import RestaurantCard from "./RestaurentCard";
import searchIcon from "../../images/search.png";
import React, { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";

export default Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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
        setRestaurantList(parsedData?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurantList(
          parsedData?.data?.cards[2]?.data?.data?.cards
        );
      });
  } ,[]);



  return (

    <section className="section">
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search here"
            className="inputBar"
            value={searchValue}
            onChange={handelSearchValue}
          />
          <img
            src={searchIcon}
            alt="search icon"
            className="searchIcon"
            onClick={handelSearch}
          />
        </div>
        <div className="sectionBody">
          
          {filteredRestaurantList?.length > 0 ? (
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
                />
              );
            })
          ) : (
            <Shimmer />
          )
          }
        </div>
      </div>
    </section>
  );
};
