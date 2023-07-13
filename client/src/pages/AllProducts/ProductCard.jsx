import "./index.css";
import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { addProductToOrder } from "../../api/orderItems";
import { getOrderByCreatorId } from "../../api/orders";

export default function ProductCard({ product }) {
	const { loggedIn, user } = useAuth();
	const navigate = useNavigate();

	const [cartText, setCartText] = useState("Add to cart");

	const addToCart = async (productId) => {
		const order = await getOrderByCreatorId(user.id);
		if (order.success) {
			const newProduct = await addProductToOrder(order.data.id, productId);
			setCartText("Added to cart!");
			setTimeout(() => {
				setCartText("Add to cart");
			}, 2000);
		}
	};

	return (
		<div className="productCard">
			<h3 className="productCard-Name">
				<span>{product.name}</span>
				{loggedIn ? (
					<Tooltip title={cartText} placement="top" arrow>
						<span className="material-icons cursor" onClick={() => addToCart(product.id)}>
							add_shopping_cart
						</span>
					</Tooltip>
				) : (
					""
				)}
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
