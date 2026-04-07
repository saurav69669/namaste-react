import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div className="text-center my-4 p-4 w-6/12 m-auto">
            <h1 className="font-bold text-2xl">Cart items</h1>

            {cartItems.length > 0 && <button className="cursor-pointer bg-black text-white p-2 rounded my-2" onClick={handleClearCart}>Clear cart</button>}
            <div className="mt-4">
                {cartItems.length ? <ItemList items={cartItems} /> : <h2>Cart is empty ☹️ <br/> You can see your selected items here.</h2>}
            </div>
        </div>
    )
}

export default Cart;