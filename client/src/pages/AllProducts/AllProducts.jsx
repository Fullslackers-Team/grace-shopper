import "./index.css";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../api/products";
import { addProductToOrder } from "../../api/orderItems";
import { getOrderByCreatorId } from "../../api/orders";
import useAuth from "../../hook/useAuth";
import { Tooltip } from "@mui/material";
import ProductCard from "./ProductCard";

export default function AllProducts({ searchInput }) {
	const navigate = useNavigate();
	const [allProducts, setAllProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [cartText, setCartText] = useState("Add to cart");
	const { user } = useAuth();

	useEffect(() => {
		async function getProducts() {
			const productList = await getAllProducts();
			setAllProducts(productList);
		}
		getProducts();
	}, []);

	useEffect(() => {
		const newFilteredProducts = allProducts.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase()));
		setFilteredProducts(newFilteredProducts);
	}, [searchInput]);

	async function addToCart(productId) {
		const order = await getOrderByCreatorId(user.id);
		const newProduct = await addProductToOrder(order.data.id, productId);
		setCartText("Added to cart!");
		setTimeout(() => {
			setCartText("Add to cart");
		}, 2000);
	}

	return (
		<div className="allProductsPage">
			{searchInput && searchInput.length ? (
				filteredProducts.length ? (
					filteredProducts.map((product) => {
						return <ProductCard key={product.id} product={product} cartText={cartText} />;
					})
				) : (
					<h1>No products match your search.</h1>
				)
			) : (
				allProducts.map((product) => {
					return <ProductCard key={product.id} product={product} cartText={cartText} />;
				})
			)}
		</div>
	);
}
