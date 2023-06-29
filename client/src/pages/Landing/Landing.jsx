import FeaturedPets from "./components/FeaturedPets";
import Top from "./components/Top";
import TopSellers from "./components/TopSellers";
import "./index.css";

export default function Landing() {
	return (
		<div>
			<Top />
			<TopSellers />
			<FeaturedPets />
		</div>
	);
}
