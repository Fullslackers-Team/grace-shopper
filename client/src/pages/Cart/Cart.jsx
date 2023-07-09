import "./index.css";
import { removeProductFromOrder, removeAllProductsFromOrder, getOrderItems } from "../../api/orderItems";
import { getOrderByCreatorId } from "../../api/orders";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

export default function Cart() {
	const { user } = useAuth();

	const [cart, setCart] = useState([]);

	useEffect(() => {
		async function fetchOrderItems() {
			const orderId = await getOrderByCreatorId(user.id);
			const orderItems = await getOrderItems(orderId.data.creator_id);

			let newCart = [];
			for (let i = 0; i < orderItems.length; i++) {
				newCart.push(orderItems[i].product_id);
			}

			setCart(newCart);
		}
		if (!user) return;
		fetchOrderItems();
	}, [user]);

	return (
		<div className="cart-container">
			{cart
				? cart.map((product_id) => (
						<div key={product_id} className="product-card">
							<h1 className="product-name">{product_id}</h1>
							{/* <p className="product-price">{orderItem.price}</p> */}
							{/* <p className="remove-buttons">
								<button className="link" onClick={removeProductFromOrder}>
									Remove item from cart
								</button>
							</p> */}
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
