import { Link } from "react-router-dom";
import "./TopSellers.css"

export default function TopSellers() {
	return <div className="topSellers">

		<div className="topSellersContent">
		<h2>TOP SELLERS!</h2>
			<ul className="topSellersList">
				<li>
					<h3 className="productName">Kong Wubba Classic Toy </h3>
					<p className="productInfo">Made with durable, ballistic nylon for added toughness, and tails on one end for extra shaking fun.</p>
				</li>
				<li>
					<h3 className="productName">Blue Buffalo Life Protection Formula</h3>
					<p className="productInfo">Essential, high-quality protein for healthy muscle development, and carbs for energy for an active life.</p>
				</li>
				<li>
					<h3 className="productName">Donut Cuddler Bed</h3>
					<p className="productInfo">Soft faux shag fur keeps your furry friend warm and cozy on cold nights.</p>
				</li>
				<li>
					<h3 className="productName">Seresto Flea & Tick Collar</h3>
					<p className="productInfo">Long-lasting collar that kills and repels fleas for 8 months.</p>
				</li>
		</ul>
		<Link to="/products"><button>SHOP NOW!</button></Link>
		</div>

		<div className="topSellersImage">
		<img style={{maxWidth: "350px"}} src="https://wallpapers.com/images/featured/funny-dog-hwpxok1ured4qh98.jpg"/>
		</div>
	</div>;
}
