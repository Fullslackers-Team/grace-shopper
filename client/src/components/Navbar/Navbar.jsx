import React from "react";
import { logout } from "../../api/auth";
import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
	const { setLoggedIn, loggedIn } = useAuth();

	async function handleLogout() {
		await logout();
		setLoggedIn(!loggedIn);
	}
	return (
		<div className="navbar">
			<h1>Grace Shopper</h1>
			<ul className="navlinks">
				<li>
					<Link to="/">
						<button className="link">Home</button>
					</Link>
				</li>
				<li>
					<Link to="/Products">
						<button className="link">All Products</button>
					</Link>
				</li>
				{loggedIn ? (
					<li>
						<Link to="/orderItems">
							<button className="link">My Cart</button>
						</Link>
					</li>
				) : (
					<></>
				)}
				<li>
					<Link to="/Login">
						<button className="link">Login</button>
					</Link>
				</li>
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
