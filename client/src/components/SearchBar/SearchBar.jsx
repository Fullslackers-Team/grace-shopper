import React, { useState } from "react";

export default function searchBar() {
	const [searchInput, setSearchInput] = useState("");
	const products = [
		{
			name: "chew toy",
			description: "made of rubber, squeeks",
			price: "5",
			stock: 50,
		},
		{
			name: "Pet Amor",
			description: "flea and ticket shampoo",
			price: "7.99",
			stock: 10,
		},
		{
			name: "Science Diet",
			description: "dry kibble",
			price: "65",
			stock: 5,
		},
		{
			name: "Kong Ultra Strong",
			description: "double door wired crate",
			price: "100",
			stock: 10,
		},
	];

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

			<table>
				<tr>
					<th>Product</th>
				</tr>

				{products.map((product) => {
					<div>
						<tr>
							<td>{product.name}</td>
							<td>{product.description}</td>
						</tr>
					</div>;
				})}
			</table>
		</div>
	);
}
