import React from "react";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchBar({ searchInput, setSearchInput }) {
	const location = useLocation();
	const navigate = useNavigate();

	const handleChange = (e) => {
		if (location.pathname !== "products") navigate("/products");
		setSearchInput(e.target.value);
	};

	return (
		<div>
			<input className="search-input" type="search" placeholder="Search here" onChange={handleChange} value={searchInput} />
		</div>
	);
}
