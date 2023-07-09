import "../index.css";

export default function CatProducts() {
	return (
        <div className="Products">
            <h1>Cat Products</h1>
			<div className="Product-Content">
			<div className="Product-Card">
				<h3 className="Product-Name">Frisco Heavy Duty Cat Tree</h3>
				<img style={{width:"175px", height:"200px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/166719_MAIN._AC_SL600_V1674509894_.jpg"/>
				<p className="Product-Price">Price: $60</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">Dome Cleanstep Litter Box</h3>
				<img style={{width:"175px", height:"200px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/68666_MAIN._AC_SL600_V1565284344_.jpg"/>
				<p className="Product-Price">Price: $37</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">Yeowww! Organic Catnip 2oz Tub</h3>
				<img style={{width:"175px", height:"200px"}} className="Product-Img" src="https://image.chewy.com/is/catalog/103031._AC_SL600_V1467808857_.jpg"/>
				<p className="Product-Price">Price: $11</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">Frisco Sisal Cat Scratching Post</h3>
				<img style={{width:"175px", height:"200px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/140151_MAIN._AC_SL600_V1674156327_.jpg"/>
				<p className="Product-Price">Price: $17</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">Frisco Sisal Cat Scratching Post</h3>
				<img style={{width:"175px", height:"200px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/324313_MAIN._AC_SL600_V1635802909_.jpg"/>
				<p className="Product-Price">Price: $47</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			</div>
        </div>
    );
    }