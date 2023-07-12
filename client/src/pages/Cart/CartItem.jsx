import "./index.css";
import { removeProductFromOrder, removeAllProductsFromOrder, getOrderItems } from "../../api/orderItems";
import { getOrderByCreatorId } from "../../api/orders";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { getProduct } from "../../api/products";

export default function CartItem({ productId, quantity, orderId, setCart }) {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [imgUrl, setImgUrl] = useState("");
	const [price, setPrice] = useState("");
	const [rating, setRating] = useState("");
	const [stock, setStock] = useState("");

	useEffect(() => {
		async function fetchOrderItems() {
			const product = await getProduct(productId);
			if (!product) return;
			setName(product[0].name);
			setDescription(product[0].description);
			setImgUrl(product[0].img_url);
			setPrice(product[0].price);
			setRating(product[0].rating);
			setStock(product[0].stock);
		}
		fetchOrderItems();
	}, []);

	async function removeItem() {
		try {
			const removedItem = await removeProductFromOrder(orderId, productId);
			setCart([]);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="product-card">
			<div className="product-summary">
				<div className="product-close">
					<span className="product-close-icon material-icons cursor" onClick={removeItem}>
						close
					</span>
				</div>
				<img src={imgUrl} alt="Unavailable" className="product-sum-image" />
				<p className="product-sum-text">{name}</p>
				<p className="product-sum-text">${price}</p>
				<p className="product-sum-text">x{quantity}</p>
			</div>
			{/* <p className="product-price">{orderItem.price}</p> */}
			{/* <p className="remove-buttons">
								<button className="link" onClick={removeProductFromOrder}>
									Remove item from cart
								</button>
							</p> */}
		</div>
	);
}
