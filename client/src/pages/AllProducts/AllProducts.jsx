import "./index.css";
import React from "react";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../api/products";
import ProductCard from "./ProductCard";

export default function AllProducts({ searchInput }) {
	const [allProducts, setAllProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

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

	return (
		<div className="allProductsPage">
			{searchInput && searchInput.length ? (
				filteredProducts.length ? (
					filteredProducts.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					})
				) : (
					<h1>No products match your search.</h1>
				)
			) : (
				allProducts.map((product) => {
					return <ProductCard key={product.id} product={product} />;
				})
			)}
		</div>
	);
}
