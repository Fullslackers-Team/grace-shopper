import { useState } from "react";
import CheckoutShip from "./CheckoutShip";
import CheckoutPay from "./CheckoutPay";
import CheckoutThanks from "./CheckoutThanks";

export default function Checkout() {
  const [page, setPage] = useState("CheckoutShip");

  return (
    <div>
      {page === "CheckoutShip" ? <CheckoutShip setPage={setPage} /> : ""}
      {page === "CheckoutPay" ? <CheckoutPay setPage={setPage} /> : ""}
      {page === "CheckoutThanks" ? <CheckoutThanks setPage={setPage} /> : ""}
    </div>
  );
}
