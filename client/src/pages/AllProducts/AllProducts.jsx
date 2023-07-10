import "./index.css";

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
  <div className="allProductsPage">
    {allProducts.map((products) => {
      return (
        <div className="allProducts">
          <div className="productCard" key={products.id}>
            <h3 className="productCard-Name">{products.name}</h3>
            <img className="productCard-Image" style={{width:"200px", height:"175px", borderRadius:"6px"}} src={products.img_url}/>
            <h3 className="productCard-Price">Price: ${products.price}</h3>
          </div>
        </div>
      )
    })}
  </div>
  )
}
