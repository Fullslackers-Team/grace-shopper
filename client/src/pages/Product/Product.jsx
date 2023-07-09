import React from "react";
import { useEffect, useState } from "react";
import { getProduct } from "../../api/products";
import { useParams } from "react-router-dom";
import "./index.css";

// export default function Product() {
// 	const { id } = useParams();

// 	const [name, setName] = useState("");
// 	const [description, setDescription] = useState("");
// 	const [price, setPrice] = useState("");
// 	const [stock, setStock] = useState("");
// 	const [rating, setRating] = useState("");
// 	const [imgurl, setImgurl] = useState("");

// 	useEffect(() => {
// 		async function fetchProductInfo() {
// 			const products = await getProduct(id);
// 			setName(products[0].name);
// 			setDescription(products[0].description);
// 			setPrice(products[0].price);
// 			setStock(products[0].stock);
// 			setRating(products[0].rating);
// 			setImgurl(products[0].img_url);
// 		}
// 		fetchProductInfo();
// 	}, [id]);
// 	return (
// 		<div className="product-page">
// 			<div>
// 				<img src={imgurl} alt="Product Image" />
// 			</div>
// 			<div className="product-info">
// 				<h1>{name}</h1>
// 				<p>{description}</p>
// 				<p>{price}</p>
// 				<p>{stock}</p>
// 				<p>{rating}</p>
// 			</div>
// 		</div>
// 	);
// }

export default function singleItem() {
	const [singleProduct, setSingleProduct] = useState({});
	const { productId } = useParams();

	useEffect (() => {
		async function productDetails() {
			setSingleProduct(await getProduct(productId));
		}
		productDetails()
	}, []);

	return (
		<div className="singleProduct-Page">
			<h1>{singleProduct.id}</h1>
		</div>
	)
}