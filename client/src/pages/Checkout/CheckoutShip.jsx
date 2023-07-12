import "./checkout.css";
import React, { useState } from "react";

export default function CheckoutShip({ setPage }) {
  const [fullname, setFullName] = useState("");
  const [streetaddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipCode] = useState("");

  async function onClick(e) {
    e.preventDefault();
    await CheckoutShip(fullname, streetaddress, city, state, zipcode);
  }
  return (
    <div className="checkout-forms">
      <form className="checkout-form-ship" onSubmit={onClick}>
        <label>Full Name:</label>
        <br></br>
        <input
          value={fullname}
          onChange={(event) => setFullName(event.target.value)}
        />
        <br></br>
        <label>Street Address:</label>
        <br></br>
        <input
          value={streetaddress}
          onChange={(event) => setStreetAddress(event.target.value)}
        />
        <br></br>
        <label>City:</label>
        <br></br>
        <input value={city} onChange={(event) => setCity(event.target.value)} />
        <br></br>
        <label>State:</label>
        <br></br>
        <input
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        <br></br>
        <label>Zip Code:</label>
        <br></br>
        <input
          value={zipcode}
          onChange={(event) => setZipCode(event.target.value)}
        />

        <br></br>
        <button
          className="link-button"
          type="submit"
          onClick={() => setPage("CheckoutPay")}
        >
          NEXT
        </button>
      </form>
    </div>
  );
}
