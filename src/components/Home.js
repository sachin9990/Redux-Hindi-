import React, { useState } from "react";
import Products from "./Products";

function Home() {
  return (
    <div>
      <h2 className="heading">Welcome to the redux toolkit store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
}

export default Home;
