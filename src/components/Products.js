import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yeKhareednaHai } from "../store/cartSlice";
import { fetchAPIFromThunk, STATUSES } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  // const [product, setProduct] = useState([]);
  // const apiURL = "https://fakestoreapi.com/products";
  // const productFunction = async () => {
  //   const response = await fetch(apiURL);
  //   const data = await response.json();
  //   // setProduct(data);
  // };

  const { data: product, status } = useSelector((e) => e.saaman);

  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

  console.log(fetchAPIFromThunk());

  useEffect(() => {
    // productFunction();
    dispatch(fetchAPIFromThunk());
  }, []);

  const addToCart = (cartItem) => {
    // Dispatch an action.payload
    dispatch(yeKhareednaHai(cartItem));
  };

  return (
    <>
      {status === STATUSES.LOADING ? (
        <h1>Oh Bhai Thoda Intezaar karo</h1>
      ) : status === STATUSES.ERROR ? (
        <h1>Bhai Code Fat Gya</h1>
      ) : (
        <div className="productsWrapper">
          {product.map((e) => {
            return (
              <div className="card" key={e.id}>
                <img src={e.image} alt="product" />
                <h1>{e.title}</h1>
                <h3>₹{Math.round(e.price * 80)}</h3>
                <button className="btn" onClick={() => addToCart(e)}>
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;
