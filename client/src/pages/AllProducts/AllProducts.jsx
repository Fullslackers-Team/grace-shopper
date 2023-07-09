// import "./index.css";

import React from "react";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../api/products";

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const productList = await getAllProducts();
      setAllProducts(productList);
    }
    getProducts();
  }, []);

  return (
  <div className="allProoductsPage">
    <h1>All Products</h1>
    {allProducts.map((products) => {
      return (
        <div className="productCard" key={products.id}>
          <h3>Product Name: {products.name}</h3>
          {/* <img style={{width:"200px", height:"175px"}} src={products.img_url}/> */}
        </div>
      )
    })}
  </div>
  )
}
