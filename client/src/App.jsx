import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import AllProducts from "./pages/AllProducts/AllProducts";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export default function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/products" element={<AllProducts />} />
				<Route path="/products/:id" element={<Product />} />
			</Routes>
			<Footer />
		</div>
	);
}
