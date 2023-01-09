import React from "react";

export default RestaurantCard = ({
  name,
  area,
  cloudinaryImageId,
  cuisines,
  costForTwoString,
  slaString,
  totalRatingsString,
}) => {

  return (
  
    <div>
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt="food images"
      />
      <h3> {name}</h3>
      <h3>{ area } </h3> 
      <h3>{cuisines}</h3>  
      <h3>{costForTwoString}</h3> 
      <h3>{slaString}</h3>
      <h3>{totalRatingsString}</h3>
      
    </div>

    
  );
};
