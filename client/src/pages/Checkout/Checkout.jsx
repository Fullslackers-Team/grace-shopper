import { useState } from "react";
import CheckoutShip from "./CheckoutShip";

export default function Checkout() {
  const [page, setPage] = useState("CheckoutShip");

  return <div>{page === "CheckoutShip" ? <CheckoutShip /> : ""}</div>;
}

//use state, page value,
