import { useLoaderData } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { useState } from "react";

const MyCart = () => {
  const items = useLoaderData();
  const [cartItems, setCartItems] = useState(items);
  // console.log(cartItems);
  return (
    <div className="pt-[96px] container mx-auto ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-3 md:pt-6">
        Your cart items : {cartItems.length}
      </h2>
      <div className="grid gap-4 md:gap-6 py-6 px-3">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem._id}
            cartItem={cartItem}
            cartItems={cartItems}
            setCartItems={setCartItems}
          ></CartItem>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
