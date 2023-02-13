import { useSelector } from "react-redux";
import FoodItem from "./Fooditem";

const Cart = () => {
    const cart = useSelector((store) => store.cart.items);
    if(cart.length == 0) return <h1>No item in cart!</h1>
  return (
    <>
      {cart.map((x) => {
        {console.log(x)}
        return <FoodItem name={x.name} cloudinaryImageId={x.cloudinaryImageId}  category={x.category} price={x.price} key={x.id}/>;
      })}
    </>
  );
};

export default Cart;
