import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import "./index.css";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { login, register } from "../../api/auth";
import useAuth from "../../hook/useAuth";

export default function AuthForm({ loginPage }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorText, setErrorText] = useState("");

	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const { setUser, setLoggedIn } = useAuth();

	const handleLogin = async () => {
		try {
			const resp = await login(username, password);
			if (resp.success) {
				setAccount(resp.user);
			}
			setErrorText(resp?.message || "");
		} catch (err) {
			console.error(err);
		}
	};

	const handleRegister = async () => {
		try {
			const resp = await register(username, password);
			if (resp.success) {
				setAccount(resp.user);
			}
			setErrorText(resp?.message || "");
		} catch (err) {
			console.error(err);
		}
	};

	const setAccount = async (user) => {
		setUser(user);
		setLoggedIn(true);
	};

	return (
		<div className="auth-form">
			<TextField label="Username" variant="filled" value={username} onChange={(e) => setUsername(e.target.value)} />
			<FormControl variant="filled">
				<InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
				<FilledInput
					id="filled-adornment-password"
					type={showPassword ? "text" : "password"}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
			<div>
				<Button
					variant="contained"
					sx={{ width: "100%", mt: "1rem" }}
					onClick={() => {
						if (loginPage) {
							handleLogin();
						} else {
							handleRegister();
						}
					}}
				>
					{loginPage ? "Login" : "Register"}
				</Button>
				{errorText && errorText.length ? <p className="info-text">{errorText}</p> : ""}
				<p style={{ marginBottom: "-0.25rem" }}>
					{loginPage ? "Need an account? " : "Already have an account? "}
					<span>
						<Link to={loginPage ? "/register" : "/login"} className="link">
							{loginPage ? "Register" : "Login"}
						</Link>
					</span>
				</p>
			</div>
		</div>
	);
}
