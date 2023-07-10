import "./checkout.css";
import React, { useState } from "react";

export default function CheckoutShip({ setPage }) {
  const [fullname, setFullName] = useState("");
  const [streetaddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipCode] = useState("");

  return (
    <div className="checkout-forms">
      <form
        className="checkout-form-ship"
        onSubmit={async (e) => {
          e.preventDefault();
          await CheckoutShip(fullname, streetaddress, city, state, zipcode);
        }}
      >
        <label>Full Name:</label>
        <textarea
          value={fullname}
          onChange={(event) => setFullName(event.target.value)}
        />

        <label>Street Address:</label>
        <textarea
          value={streetaddress}
          onChange={(event) => setStreetAddress(event.target.value)}
        />

        <label>City:</label>
        <textarea
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <label>State:</label>
        <textarea
          value={state}
          onChange={(event) => setState(event.target.value)}
        />

        <label>Zip Code:</label>
        <textarea
          value={zipcode}
          onChange={(event) => setZipCode(event.target.value)}
        />

        <br></br>
        <button type="submit" onClick={() => setPage("CheckoutPay")}>
          NEXT
        </button>
      </form>
    </div>
  );
}
