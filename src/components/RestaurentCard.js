import React from "react";
import {Link} from "react-router-dom"

export default RestaurantCard = ({
  name,
  area,
  cloudinaryImageId,
  cuisines,
  costForTwoString,
  slaString,
  totalRatingsString,
  id
}) => {

 

  return (
    <div className="border-solid border-2 m-4">
      <Link to={`/restaurant/${id}`} >
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt="food images"
        className="h-52 w-80"
        />
        </Link>
      <div className="p-2">
        <h3 className="foodName"> {name}</h3>
        <p className="break-words">{cuisines}</p>
        <h3 className="foodArea">{area} </h3>
      </div>

      <div className="flex text-md justify-evenly font-medium mt-2">
        <h3>{totalRatingsString}</h3>
        <h3>{slaString}</h3>
        <h3>{costForTwoString}</h3>
      </div>
    </div>
  );
};
