import restaurantList from "../constant";
import RestaurantCard from "./RestaurentCard";

export default Body = () => {
  const style = {
    display: "flex",
    flexWrap: "wrap"
  };

  return (
    <div style={style}>
      {restaurantList.data.cards.map((restaurant) => (
        <RestaurantCard
          key={restaurant?.data?.id}
          name={restaurant?.data?.name}
          cloudinaryImageId={restaurant.data.cloudinaryImageId}
          area={restaurant.data.area}
          cuisines={restaurant.data.cuisines}
          costForTwoString={restaurant.data.costForTwoString}
          slaString={restaurant.data.slaString}
          totalRatingsString={restaurant.data.totalRatingsString}
        />
      ))}
    </div>
  );
};
