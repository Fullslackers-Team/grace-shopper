import "./index.css";
import {
	removeProductFromOrder,
	removeAllProductsFromOrder,
} from "../../api/orderItems";
import { getOrderByCreatorId } from "../../api/orders";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

export default function Cart() {
	const [orderItems, setOrderItems] = useState([]);
	const { user } = useAuth();

	useEffect(() => {
		async function fetchOrderItems() {
			const response = await getOrderByCreatorId(user?.id || 0);
			if (response.data?.length) {
				setOrderItems(response.data);
			}
		}
		fetchOrderItems();
	}, [user]);
	return (
		<div className="cart-container">
			{orderItems
				? orderItems.map((orderItem, product_id) => (
						<div key={product_id} className="product-card">
							<h1 className="product-name">{orderItem.name}</h1>
							<p className="product-price">{orderItem.price}</p>
							<p className="remove-buttons">
								<button className="link" onClick={removeProductFromOrder}>
									Remove item from cart
								</button>
							</p>
						</div>
				  ))
				: ""}

			<p className="checkout-button">
				<Link to="/checkout">
					<button className="link"> Continue to checkout</button>
				</Link>
			</p>
		</div>
	);
}
