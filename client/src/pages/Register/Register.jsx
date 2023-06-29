import AuthForm from "../../components/Auth/AuthForm";
import "./index.css";

export default function Register() {
	return (
		<div className="register-section">
			<AuthForm login={false} />
		</div>
	);
}
