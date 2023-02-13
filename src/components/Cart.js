import { useSelector } from "react-redux";
import FoodItem from "./Fooditem";
import { useDispatch } from "react-redux";
import {clearCart} from "../utils/cartSlice"
const Cart = () => {
    const cart = useSelector((store) => store.cart.items);
    if(cart.length == 0) return <h1>No item in cart!</h1>

    const dispatch = useDispatch()
    const handleClearCart =()=>{
      dispatch(clearCart()) 
    }
  return (
    <>
      {cart.map((x) => {
        {console.log(x)}
        return <FoodItem name={x.name} cloudinaryImageId={x.cloudinaryImageId}  category={x.category} price={x.price} key={x.id}/>;
      })}
      <div>

      <button className="bg-slate-200 text-xl cursor-pointer p-5  m-auto" onClick={handleClearCart}>Clear Cart</button>

      </div>
    </>
  );
};

export default Cart;
