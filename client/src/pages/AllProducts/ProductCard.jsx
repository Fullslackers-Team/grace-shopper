import "./index.css";
import React from "react";

import { Tooltip } from "@mui/material";

export default function ProductCard({ product, cartText }) {
	return (
		<div className="productCard">
			<h3 className="productCard-Name">
				<span>{product.name}</span>
				<Tooltip title={cartText} placement="top" arrow>
					<span className="material-icons cursor" onClick={() => addToCart(product.id)}>
						add_shopping_cart
					</span>
				</Tooltip>
			</h3>
			<img className="productCard-Image" style={{ width: "200px", height: "175px", borderRadius: "6px" }} src={product.img_url} />
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
