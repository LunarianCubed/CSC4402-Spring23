import React, { useState, useEffect, useReducer } from "react";
import "./Login.css";
import Axios from "axios";
import axios from "axios";
import { Navigate } from "react-router-dom";

function LoginComponent() {
	const [email, setEmail] = useState(null);
	const [pass, setPass] = useState(null);
	const [login, setLogin] = useState(false);

	const checkLogin = () => {
		let loggedIn = false;
		axios
			.get("http://localhost:3001/api/login")
			.then((response) => {
				console.log(response.data);
				response.data.forEach((user) => {
					console.log(user);
					if (user.Email === email && user.Password === pass) {
						setLogin(true);
						loggedIn = true;
					}
				});
			})
			.then(() => {
				if (!loggedIn) {
					window.alert("Login Failed");
					setPass(null);
					document.getElementById("pass").value = "";
				}
			});
	};

	const signUp = async () => {
		await Axios.post("http://localhost:3001/api/signup", {
			email: email,
			pass: pass,
		}).then(setLogin(true));
	};
	return (
		<>
			{login ? <Navigate to="/LoadBoard" /> : null}
			<div className="login-container">
				<div className="form-container">
					<div>
						<div className="field">
							<label>Email:</label>
							<input
								type="email"
								name="email"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								required="requried"
								placeholder="Email"
							/>
						</div>
						<div className="field">
							<label>Password:</label>
							<input
								id="pass"
								type="password"
								name="pass"
								onChange={(e) => {
									setPass(e.target.value);
								}}
								required="requried"
								placeholder="Password"
							/>
						</div>
						<button onClick={() => checkLogin()}>Login</button>
						<button onClick={() => signUp()}>Sign Up</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginComponent;
