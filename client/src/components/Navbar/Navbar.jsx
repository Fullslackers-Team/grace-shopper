import React from "react";
import { logout } from "../../api/auth";
import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../assets/LOGO.png";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
	const { setUser, loggedIn, setLoggedIn } = useAuth();

	async function handleLogout() {
		try {
			await logout();
			setUser(null);
			setLoggedIn(false);
		} catch (err) {
			console.error(err);
		}
	}
	return (
		<div className="navbar">
			<div className="header">
				<img className="logopic" src={logo} />
			</div>
			<h1 className="header-name">Paws & Claws</h1>

			<ul className="navlinks">
				<SearchBar />
				<li>
					<Link to="/">
						<button className="link">Home</button>
					</Link>
				</li>
				<li>
					<Link to="/products">
						<button className="link">All Products</button>
					</Link>
				</li>
				{loggedIn ? (
					<li>
						<Link to="/cart">
							<button className="link">My Cart</button>
						</Link>
					</li>
				) : (
					<></>
				)}
				{!loggedIn ? (
					<li>
						<Link to="/login">
							<button className="link">Login</button>
						</Link>
					</li>
				) : (
					""
				)}
				{loggedIn ? (
					<li>
						<Link to="/">
							<button className="link" onClick={handleLogout}>
								Logout
							</button>
						</Link>
					</li>
				) : (
					<></>
				)}
			</ul>
		</div>
	);
}
