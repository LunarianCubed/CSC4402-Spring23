import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

function Navbar() {
	const location = useLocation().pathname;
	return (
		<>
			<nav className="navbar">
				<span className="navbar-container">
					<ul className="navbar-menu">
						<li>
							<Link to="/LoadBoard" className="navbar-logo" id="navbarItem">
								<img src="/zetong-li-mVqTumQH-c0-unsplash.jpg" alt="Trucker" />
								Tiger Trucking
							</Link>
						</li>
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<li className="about">
							<Link to="/About">About</Link>
						</li>
						<li>
							{location === "/Login" ? (
								<p>Login</p>
							) : (
								<Link to="/Profile" className="profile">
									Profile
									<img
										className="userPic"
										src="/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
										alt="UserPic"
									/>
								</Link>
							)}
						</li>
					</ul>
				</span>
			</nav>
		</>
	);
}

export default Navbar;
