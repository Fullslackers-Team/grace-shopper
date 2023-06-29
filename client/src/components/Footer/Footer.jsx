import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export default function Footer() {
	return (
		<div className="footer">
			<ul className="navlinks">
				<Link to="/">
					<button className="link">Contact Us</button>
				</Link>
				<Link to="/">
					<button className="link">Social Media</button>
				</Link>
				<Link to="https://github.com/Fullslackers-Team/grace-shopper">
					<button className="link">GitHub Repo</button>
				</Link>
			</ul>
		</div>
	);
}
