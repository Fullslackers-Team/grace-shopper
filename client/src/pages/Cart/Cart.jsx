import "./index.css";
import { removeProductFromOrder, removeAllProductsFromOrder, getOrderItems } from "../../api/orderItems";
import { getOrderByCreatorId } from "../../api/orders";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import CartItem from "./CartItem";

export default function Cart() {
	const { user } = useAuth();

	const [cart, setCart] = useState([]);

	async function fetchOrderItems() {
		if (!user) return;

		const orderId = await getOrderByCreatorId(user.id);
		if (!orderId.data) return;

		const orderItems = await getOrderItems(orderId.data.creator_id);
		const newCart = orderItems.map((orderItem) => orderItem.product_id);
		if (newCart.length === cart.length) return;
		setCart(newCart);
	}
	fetchOrderItems();

	return (
		<div className="cart-page">
			<div className="cart-cont">
				{cart.map((product_id) => {
					return <CartItem key={product_id} productId={product_id} />;
				})}

				<p className="checkout-button">
					<Link to="/checkout">
						<button className="link"> Continue to checkout</button>
					</Link>
				</p>
			</div>
		</div>
	);
}
