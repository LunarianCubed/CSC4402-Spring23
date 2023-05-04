import React, { useState, useEffect, useReducer } from "react";
import "./Profile.css";
import { Navigate } from "react-router-dom";

function ProfileComponent() {
	const [logout, setLogout] = useState(false);
	return (
		<>
			{logout ? <Navigate to="/Login" /> : null}
			<div className="profile-container">
				<h1>Welcome</h1>
				<button onClick={() => setLogout(true)}>Logout</button>
			</div>
		</>
	);
}

export default ProfileComponent;
