import { Grid } from "@mui/material";

export default function FeaturedPets() {
	return (
		<div>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				{/* {Array.from(Array(6)).map((_, index) => ( */}
				<Grid item xs={2} sm={4} md={4} key={index}></Grid>
				<Grid item xs={2} sm={4} md={4} key={index}></Grid>
				<Grid item xs={2} sm={4} md={4} key={index}></Grid>
				{/* ))} */}
			</Grid>
		</div>
	);
}
