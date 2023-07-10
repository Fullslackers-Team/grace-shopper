import "./checkout.css";
import React, { useState } from "react";

export default function CheckoutPay({ setPage }) {
  const [fullname, setFullName] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [zipcode, setZipCode] = useState("");

  return (
    <div className="checkout-forms">
      <form
        className="checkout-form-pay"
        onSubmit={async (e) => {
          e.preventDefault();
          await CheckoutPay(fullname, cardnumber, expiration, cvv, zipcode);
        }}
      >
        <label>Name as it appears on Card:</label>
        <textarea
          value={fullname}
          onChange={(event) => setFullName(event.target.value)}
        />

        <label>Card Number:</label>
        <textarea
          value={cardnumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />

        <label>Expiration:</label>
        <textarea
          value={expiration}
          onChange={(event) => setExpiration(event.target.value)}
        />

        <label>CVV:</label>
        <textarea
          value={cvv}
          onChange={(event) => setCvv(event.target.value)}
        />

        <label>Zip Code:</label>
        <textarea
          value={zipcode}
          onChange={(event) => setZipCode(event.target.value)}
        />

        <br></br>
        <button type="submit" onClick={() => setPage("CheckoutThanks")}>
          NEXT
        </button>
      </form>
    </div>
  );
}
