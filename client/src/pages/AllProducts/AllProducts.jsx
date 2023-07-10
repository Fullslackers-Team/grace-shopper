import "./index.css";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../api/products";
import { addProductToOrder } from "../../api/orderItems";
import { getOrderByCreatorId } from "../../api/orders";
import useAuth from "../../hook/useAuth";

export default function AllProducts() {
	const navigate = useNavigate();
	const [allProducts, setAllProducts] = useState([]);
	const { user } = useAuth();

	useEffect(() => {
		async function getProducts() {
			const productList = await getAllProducts();
			setAllProducts(productList);
		}
		getProducts();
	}, []);

	async function addToCart(productId) {
		const order = await getOrderByCreatorId(user.id);
		const newProduct = await addProductToOrder(order.data.id, productId);
		console.log(newProduct);
	}

	return (
		<div className="allProductsPage">
			{allProducts.map((products) => {
				return (
					<div className="productCard" key={products.id}>
						<h3 className="productCard-Name">
							<span>{products.name}</span>
							<span className="material-icons cursor" onClick={() => addToCart(products.id)}>
								add_shopping_cart
							</span>
						</h3>
						<img className="productCard-Image" style={{ width: "200px", height: "175px", borderRadius: "6px" }} src={products.img_url} />
						<h3 className="productCard-Price">
							<span>
								<button className="viewtItemBtn"
									onClick={() => {
										navigate(`/products/${products.id}`);
									}}
								>
									View Item
								</button>
							</span>
							<span>Price: ${products.price}</span>
						</h3>
					</div>
				);
			})}
		</div>
	);
}
