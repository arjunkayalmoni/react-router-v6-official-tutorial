import {
	Routes,
	Route,
	Navigate,
	Link,
	Outlet,
	NavLink,
} from "react-router-dom";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";

export default function App() {
	return (
		<div>
			<h1>Bookkeeper</h1>
			<nav style={{ borderBottom: "solid 1px", padding: "1rem" }}>
				<NavLink
					to="/invoices"
					style={({ isActive }) => ({
						textDecoration: "none",
						color: isActive ? "red" : "",
					})}
				>
					Invoices
				</NavLink>{" "}
				|{" "}
				<NavLink
					to="/expenses"
					style={({ isActive }) => ({
						textDecoration: "none",
						color: isActive ? "red" : "",
					})}
				>
					Expenses
				</NavLink>
			</nav>
			<Outlet />
		</div>
	);
}
