import DogProducts from "./components/DogProducts";
import CatProducts from "./components/CatProducts";
import ReptileProducts from "./components/ReptilesProduct";
import "./index.css";

export default function AllProducts() {
  // fetch all products from DB
  return (
    <div>
      <DogProducts />
      <CatProducts />
      <ReptileProducts />
    </div>
  );
}
