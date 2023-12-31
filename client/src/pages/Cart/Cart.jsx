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
	let addedItems = [];
	const [orderId, setOrderId] = useState(0);

	useEffect(() => {
		async function fetchOrderItems() {
			if (!user) return;

			const orderId = await getOrderByCreatorId(user.id);
			if (!orderId.data) return;
			setOrderId(orderId.data.id);

			const orderItems = await getOrderItems(orderId.data.id);
			const newCart = orderItems.map((orderItem) => orderItem.product_id);
			if (newCart.length === cart.length) return;
			setCart(newCart);
		}
		fetchOrderItems();
	});

	return (
		<div className="cart-page">
			<div className="cart-cont">
				<div
					className="product-card product-summary"
					style={{ backgroundColor: "transparent", marginBottom: "-2rem", marginTop: "0rem", alignItems: "end" }}
				>
					<h1 style={{ marginBottom: "16px" }}>Cart</h1>
					<span></span>
					<p className="product-sum-text">Product</p>
					<p className="product-sum-text">Price</p>
					<p className="product-sum-text">Quantity</p>
				</div>
				{cart.length === 0 ? (
					<h2 style={{ color: "#cecece", marginTop: "5rem", marginBottom: "5rem" }}>You have no items in your cart.</h2>
				) : (
					""
				)}
				{cart.map((product_id) => {
					if (addedItems.includes(product_id)) return "";
					const duplicates = cart.filter((val) => val === product_id);
					addedItems.push(product_id);
					return <CartItem key={product_id} productId={product_id} quantity={duplicates.length} orderId={orderId} setCart={setCart} />;
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
