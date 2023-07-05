import "./index.css";
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
					await checkoutPay(fullname, cardnumber, expiration, cvv, zipcode);
				}}
			>
				<label>Name as it appears on Card:</label>
				<textarea style={{ padding: "5px" }} value={fullname} onChange={(event) => setFullName(event.target.value)} />

				<label>Card Number:</label>
				<textarea style={{ padding: "5px" }} value={cardnumber} onChange={(event) => setCardNumber(event.target.value)} />

				<label>Expiration:</label>
				<textarea style={{ padding: "5px" }} value={expiration} onChange={(event) => setExpiration(event.target.value)} />

				<label>CVV:</label>
				<textarea style={{ padding: "5px" }} value={cvv} onChange={(event) => setCvv(event.target.value)} />

				<label>Zip Code:</label>
				<textarea style={{ padding: "5px" }} value={zipcode} onChange={(event) => setZipCode(event.target.value)} />

				<br></br>
				<button type="submit">NEXT</button>
			</form>
		</div>
	);
}
