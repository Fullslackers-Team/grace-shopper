import React from "react";
import { useEffect, useState } from "react";
import { getProduct } from "../../api/products";
import { addProductToOrder } from "../../api/orderItems";
import { getOrderByCreatorId } from "../../api/orders";
import useAuth from "../../hook/useAuth";
import { useParams } from "react-router-dom";
import "./index.css";

export default function Product() {
	const { id } = useParams();
	const { user } = useAuth();

	const [buttonText, setButtonText] = useState("Add to Cart");
	const [name, setName] = useState("");
	const [productId, setProductId] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [stock, setStock] = useState("");
	const [rating, setRating] = useState("");
	const [imgurl, setImgurl] = useState("");

	useEffect(() => {
		async function fetchProductInfo() {
			const products = await getProduct(id);
			setName(products[0].name);
			setProductId(products[0].id);
			setDescription(products[0].description);
			setPrice(products[0].price);
			setStock(products[0].stock);
			setRating(products[0].rating);
			setImgurl(products[0].img_url);
		}
		fetchProductInfo();
	}, [id]);

	async function addToCart() {
		try {
			const order = await getOrderByCreatorId(user.id);
			if (!order) return;
			const newProduct = await addProductToOrder(order.data.id, productId);
			setButtonText("Added item to cart!");
			setTimeout(() => {
				setButtonText("Add to Cart");
			}, 2000);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="product-page">
			<div>
				<img className="product-img" src={imgurl} alt="Product Image" />
			</div>
			<div className="product-info">
				<h1 className="product-name">{name}</h1>
				<p className="product-decription">{description}</p>
				<p>Price: ${price}</p>
				<p>Stock: {stock}</p>
				<p>
					Stars: {rating} <span className="material-icons">star</span>
				</p>
				<button className="addButton" onClick={addToCart}>
					{buttonText}
				</button>
			</div>
		</div>
	);
}
