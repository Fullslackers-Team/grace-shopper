import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import AllProducts from "./pages/AllProducts/AllProducts";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import { getAllProducts } from "./api/products";

export default function App() {
	const [searchInput, setSearchInput] = useState("");

	return (
		<div>
			<Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/products" element={<AllProducts searchInput={searchInput} />} />
				<Route path="/products/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
			<Footer />
		</div>
	);
}
