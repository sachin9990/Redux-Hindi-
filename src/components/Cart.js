import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { yeAbNaiKhareednaHai } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((e) => e.daliya);
  const removeFromCart = (e) => {
    // console.log(e);

    dispatch(yeAbNaiKhareednaHai(e));
  };
  return (
    <div>
      {cartItems.map((e) => {
        return (
          <div className="card" key={e.id}>
            <img src={e.image} alt="image" />
            <h2>{e.title}</h2>
            <h3>₹{Math.round(e.price * 80)}</h3>
            <button className="btn" onClick={() => removeFromCart(e)}>
              Remove from cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
