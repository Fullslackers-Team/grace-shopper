import "./checkout.css";
import logo from "../../assets/LOGO.png";

export default function CheckoutThanks({ setPage }) {
  return (
    <div className="checkout-forms">
      <h1 className="thank-you">
        THANK YOU <br></br>FOR SHOPPING WITH
      </h1>

      <img src={logo} />
    </div>
  );
}
