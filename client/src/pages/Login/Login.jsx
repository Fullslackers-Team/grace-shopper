import AuthForm from "../../components/Auth/AuthForm";
import "./index.css";

export default function Login() {
	return (
		<div className="login-section">
			<AuthForm login={true} />
		</div>
	);
}
