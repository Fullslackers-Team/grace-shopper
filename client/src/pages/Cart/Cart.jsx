import "./index.css";
import {
	getOrderItems,
	removeProductFromOrder,
	removeAllProductsFromOrder,
} from "../../api/orderItems";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
	const [orderItems, setOrderItems] = useState([]);
	useEffect(() => {
		async function fetchOrderItems() {
			const response = await getOrderItems();
			setOrderItems(response);
		}
		fetchOrderItems();
	}, []);
	return (
		<div className="cart-container">
			{orderItems
				? orderItems.map(([orderItem, product_id]) => (
						<div key={product_id} className="product-card">
							<h1 className="product-name">{orderItem.name}</h1>
							<p className="product-price">{orderItem.price}</p>
							<p className="remove-buttons">
								<button className="link" onClick={removeProductFromOrder}>
									Remove item from cart
								</button>
								<button className="link" onClick={removeAllProductsFromOrder}>
									Empty Cart
								</button>
							</p>
							<p className="checkout-button">
								<Link to="/checkout">
									<button className="link"> Continue to checkout</button>
								</Link>
							</p>
						</div>
				  ))
				: ""}
		</div>
	);
}
