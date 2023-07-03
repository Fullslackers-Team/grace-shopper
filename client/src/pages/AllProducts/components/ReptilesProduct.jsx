import "../index.css";

export default function ReptileProducts() {
	return (
		<div className="Products">
			<h1>Reptile Products</h1>
			<div className="Product-Content">
			<div className="Product-Card">
				<h3 className="Product-Name">REPTI ZOO Tank Stand Terrarium</h3>
				<img style={{width:"200px", height:"175px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/839670_MAIN._AC_SL600_V1682003172_.jpg"/>
				<p className="Product-Price">Price: $260</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">HerpCult Acrylic Clear-Top Habitat</h3>
				<img style={{width:"200px", height:"175px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/294804_MAIN._AC_SL600_V1621029202_.jpg"/>
				<p className="Product-Price">Price: $100</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">Oiibo Full Glass Terrarium 24-gal</h3>
				<img style={{width:"200px", height:"175px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/262856_MAIN._AC_SL600_V1621521433_.jpg"/>
				<p className="Product-Price">Price: $180</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">REPTI ZOO Tempered Glass Terrarium</h3>
				<img style={{width:"200px", height:"175px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/697614_MAIN._AC_SL600_V1667406002_.jpg"/>
				<p className="Product-Price">Price: $190</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">New Age Pet ECOPLEX Mojave Habitat</h3>
				<img style={{width:"200px", height:"175px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/242180_MAIN._AC_SL600_V1619204278_.jpg"/>
				<p className="Product-Price">Price: $310</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			</div>
		</div>
	);
}
