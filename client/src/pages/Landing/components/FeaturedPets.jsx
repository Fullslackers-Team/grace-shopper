import { Button, Slide } from "@mui/material";
import "./FeaturedPets.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function FeaturedPets() {
	const containerRef = useRef(null);
	const [dogHovered, setDogHovered] = useState(false);
	const [catHovered, setCatHovered] = useState(false);
	const [lizardHovered, setLizardHovered] = useState(false);

	return (
		<div className="featured-pets-section">
			<div style={{ textAlign: "left" }}>
				<h1>Featured Pets</h1>
				<div className="featured-pets-grid" ref={containerRef}>
					<Link to="/dogs">
						<div className="featured-pet-card dog" onMouseOver={() => setDogHovered(true)} onMouseLeave={() => setDogHovered(false)}>
							<Slide direction="up" in={dogHovered} mountOnEnter unmountOnExit container={containerRef.current}>
								<div className="bottom-of-card-text">View Dog Products {"→"}</div>
							</Slide>
						</div>
					</Link>
					<Link to="/cats">
						<div className="featured-pet-card cat" onMouseOver={() => setCatHovered(true)} onMouseLeave={() => setCatHovered(false)}>
							<Slide direction="up" in={catHovered} mountOnEnter unmountOnExit container={containerRef.current}>
								<div className="bottom-of-card-text">View Cat Products {"→"}</div>
							</Slide>
						</div>
					</Link>
					<Link to="/lizards">
						<div className="featured-pet-card lizard" onMouseOver={() => setLizardHovered(true)} onMouseLeave={() => setLizardHovered(false)}>
							<Slide direction="up" in={lizardHovered} mountOnEnter unmountOnExit container={containerRef.current}>
								<div className="bottom-of-card-text">View Lizard Products {"→"}</div>
							</Slide>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
