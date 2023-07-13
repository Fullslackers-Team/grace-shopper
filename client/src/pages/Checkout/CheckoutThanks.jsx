import "./checkout.css";
import logo from "../../assets/LOGO.png";
import { Link } from "react-router-dom";

export default function CheckoutThanks({ setPage }) {
  return (
    <div className="checkout-forms">
      <h1 className="thank-you">
        THANK YOU <br></br>FOR SHOPPING WITH
      </h1>

      <img src={logo} />

      <br></br>
      <br></br>
      <h1>Forgot something? </h1>
      <br></br>

      <Link to="/products">
        <button className="link checkout-button">Start your next order!</button>
      </Link>
    </div>
  );
}
