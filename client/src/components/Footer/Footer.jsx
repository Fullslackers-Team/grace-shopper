import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export default function Footer() {
	return (
		<div className="footer">
			<ul className="footlinks">
				{/* <Link to="/">
					<button className="link">Contact Us</button>
				</Link>
				<Link to="/">
					<button className="link">Social Media</button>
				</Link> */}
				<Link to="https://github.com/Fullslackers-Team/grace-shopper" target="_blank">
					<button className="link">GitHub Repo</button>
				</Link>
			</ul>
		</div>
	);
}
