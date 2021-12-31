import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

export default function NavBar() {
	return (
		<Navbar bg="light" variant="light">
			<Container>
				<NavLink
					style={{ textDecoration: "none" }}
					activeClassName={(navData) =>
						navData.isActive ? "is-active" : ""
					}
					to="/"
				>
					Home
				</NavLink>
				<Nav className="me-auto">
					<NavLink
						style={{ textDecoration: "none" }}
						activeClassName={(navData) =>
							navData.isActive ? "is-active" : ""
						}
						to="/dashboard"
					>
						Dashboard
					</NavLink>
					<NavLink
						style={{ textDecoration: "none" }}
						activeClassName={(navData) =>
							navData.isActive ? "is-active" : ""
						}
						to="/products"
					>
						Products
					</NavLink>
					{/* <NavLink to="/products/:productId">Product Details</NavLink> */}
				</Nav>
			</Container>
		</Navbar>
	);
}
