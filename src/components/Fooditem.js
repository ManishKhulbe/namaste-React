import { IMG_CDN } from "../constant";

const FoodItem = ({ name, cloudinaryImageId, category, price,  }) => {

  return(
    <div className="flex border-solid bg-slate-50 m-6" >
      <div className="mx-4">
        <img className="w-80  h-72" src={ IMG_CDN+cloudinaryImageId }  alt="food images" />
      </div>
      <div>
        <h1 className="">Item Name : {name}</h1>
        <h3>Price : {price}</h3>
        <h3>category : {category}</h3>
      </div>
    </div>
  )
};

export default FoodItem;
