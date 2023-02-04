import { useState , useEffect } from "react";

const useRestaurant = (resId) => {
const [restaurant , setRestaurant ] = useState(null)

    const getRestaurantMenu =async ()=>{
        await fetch(
           `https://www.swiggy.com/dapi/menu/v4/full?lat=28.6159783&lng=77.3772303&menuId=${resId}`
         )
           .then(async (data) => await data.json())
           .then((json) => {
             setRestaurant(json?.data);
           });
     }

     useEffect(()=>{
        getRestaurantMenu()
     })

     return restaurant;
};

export default useRestaurant;
