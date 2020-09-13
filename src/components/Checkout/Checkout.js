import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../common/StateProvider";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__title">
          <h3>{user ? `Hello, ${user.email}` : ""}</h3>
          <h2>Your shopping basket</h2>
        </div>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            price={item.price}
            title={item.title}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
