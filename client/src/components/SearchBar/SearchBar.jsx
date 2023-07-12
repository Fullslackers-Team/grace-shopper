import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState("");
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchSearchProducts() {
			const response = await getAllProducts();
			setProducts(response);
		}
		fetchSearchProducts();
	}, []);

	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	if (searchInput.length > 0) {
		products.filter((product) => {
			return product.name.match(searchInput);
		});
	}

	return (
		<div>
			<input
				type="search"
				placeholder="Search here"
				onChange={handleChange}
				value={searchInput}
			/>
		</div>
	);
}
