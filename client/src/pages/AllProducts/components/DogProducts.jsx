import "../index.css";

export default function DogProducts() {
	return (
        <div className="Products">
            <h1>Dog Products</h1>
			<div className="Product-Content">
			<div className="Product-Card">
				<h3 className="Product-Name">Calming Shag Fur Donut Cuddler</h3>
				<img style={{width:"200px", height:"175px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/145724_MAIN._AC_SL600_V1671734310_.jpg"/>
				<p className="Product-Price">Price: $25</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">Sliding Double Door Wire Dog Crate</h3>
				<img style={{width:"200px", height:"175px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/217625_MAIN._AC_SL600_V1580827476_.jpg"/>
				<p className="Product-Price">Price: $115</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">KONG Tugga Wubba Dog Toy</h3>
				<img style={{width:"200px", height:"175px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/53461_MAIN._AC_SL600_V1492195064_.jpg"/>
				<p className="Product-Price">Price: $12</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">Honest Kitchen Whole Grain Chicken Recipe</h3>
				<img style={{width:"200px", height:"175px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/85700_MAIN._AC_SL600_V1657661035_.jpg"/>
				<p className="Product-Price">Price: $78</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			<div className="Product-Card">
				<h3 className="Product-Name">Milk-Bone Bone Marrow Dog Treats</h3>
				<img style={{width:"175px", height:"175px"}} className="Product-Img" src="https://image.chewy.com/is/image/catalog/99863_MAIN._AC_SL600_V1627422000_.jpg"/>
				<p className="Product-Price">Price: $12</p>
				<button style={{margin: '5px'}} onClick={() => {}}>View Product</button>
			</div>
			</div>
        </div>
    );
    }