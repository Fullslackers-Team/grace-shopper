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
				<br></br>
				<input value={fullname} className="checkout-input" onChange={(event) => setFullName(event.target.value)} />
				<br></br>
				<label>Card Number:</label>
				<br></br>
				<input value={cardnumber} className="checkout-input" onChange={(event) => setCardNumber(event.target.value)} />
				<br></br>
				<label>Expiration:</label>
				<br></br>
				<input className="checkout-input" value={expiration} onChange={(event) => setExpiration(event.target.value)} />
				<br></br>
				<label>CVV:</label>
				<br></br>
				<input value={cvv} className="checkout-input" onChange={(event) => setCvv(event.target.value)} />
				<br></br>
				<label>Zip Code:</label>
				<br></br>
				<input value={zipcode} className="checkout-input" onChange={(event) => setZipCode(event.target.value)} />

				<br></br>
				<button className="link-button" type="submit" onClick={() => setPage("CheckoutThanks")}>
					NEXT
				</button>
			</form>
		</div>
	);
}
