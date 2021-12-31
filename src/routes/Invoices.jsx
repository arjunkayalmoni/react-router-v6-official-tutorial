import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
	const invoices = getInvoices();
	const [searchParams, setSearchParams] = useSearchParams();
	console.log({ sp: searchParams.get("q") });
	return (
		<div style={{ display: "flex" }}>
			<nav
				style={{
					borderRight: "solid 1px",
					padding: "1rem",
				}}
			>
				<input
					value={searchParams.get("q") || ""}
					onChange={(event) => {
						let q = event.target.value;
						if (q) {
							setSearchParams({ q });
						} else {
							setSearchParams({});
						}
					}}
				/>
				{invoices
					.filter((invoice) => {
						let filter = searchParams.get("q");
						if (!filter) return true;
						let name = invoice.name.toLowerCase();
						return (
							name.startsWith(filter.toLowerCase()) ||
							name.endsWith(filter.toLowerCase())
						);
					})
					.map((invoice) => (
						<NavLink
							style={({ isActive }) => ({
								display: "block",
								margin: "1rem 0",
								color: isActive ? "red" : "",
								textDecoration: "none",
							})}
							to={`/invoices/${invoice.number}`}
							key={invoice.number}
						>
							{invoice.name}
						</NavLink>
					))}
			</nav>
			<Outlet />
		</div>
	);
}
