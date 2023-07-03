import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import "./index.css";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

export default function AuthForm({ loginPage }) {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleLogin = () => {};

	const handleRegister = () => {};

	return (
		<div className="auth-form">
			<TextField label="Username" variant="filled" />
			<FormControl variant="filled">
				<InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
				<FilledInput
					id="filled-adornment-password"
					type={showPassword ? "text" : "password"}
					endAdornment={
						<InputAdornment position="end">
							<IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
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
