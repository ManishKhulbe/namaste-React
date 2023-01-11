import restaurantList from "../constant";
import RestaurantCard from "./RestaurentCard";
import searchIcon from "../../images/search.png";
import React, { useState } from "react";

export default Body = () => {
  const [searchValue, setSearchValue] = useState("");

  const handelSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

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
          <img src={searchIcon} alt="search icon" className="searchIcon" />
        </div>
        <div className="sectionBody">
          {searchValue != ""
            ? restaurantList.data.cards
                .filter((restaurant) => {
                  if (
                    restaurant.data.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return restaurant;
                  }
                })
                .map((restaurant) => {
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
            : restaurantList.data.cards.map((restaurant) => {
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
              })}
        </div>
      </div>
    </section>
  );
};
