import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

export default function NavBar() {
	return (
		<header className={classes.header}>
			<Container>
				<ul>
					<li>
						<NavLink
							style={{ textDecoration: "none" }}
							className={(navData) =>
								navData.isActive ? classes.active : ""
							}
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							style={{ textDecoration: "none" }}
							className={(navData) =>
								navData.isActive ? classes.active : ""
							}
							to="/dashboard"
						>
							Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink
							style={{ textDecoration: "none" }}
							className={(navData) =>
								navData.isActive ? classes.active : ""
							}
							to="/products"
						>
							Products
						</NavLink>
					</li>
				</ul>
			</Container>
		</header>
	);
}
