import "./index.css";
import React from "react";

import { Tooltip } from "@mui/material";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, cartText }) {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="productCard">
      <h3 className="productCard-Name">
        <span>{product.name}</span>
        {loggedIn ? (
          <Tooltip title={cartText} placement="top" arrow>
            <span
              className="material-icons cursor"
              onClick={() => addToCart(product.id)}
            >
              add_shopping_cart
            </span>
          </Tooltip>
        ) : (
          ""
        )}
      </h3>
      <img
        className="productCard-Image"
        style={{ width: "200px", height: "175px", borderRadius: "6px" }}
        src={product.img_url}
      />
      <h3 className="productCard-Price">
        <span>
          <button
            className="viewtItemBtn"
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
          >
            View Item
          </button>
        </span>
        <span>Price: ${product.price}</span>
      </h3>
    </div>
  );
}
