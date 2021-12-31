import React from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";

export default function Dashboard() {
	const navigate = useNavigate();
	// navigate('/dashboard')
	navigate("/dashboard", { replace: true });
	// navigate(-1)
	// navigate(-2);
	// navigate(1);

	return (
		<div>
			<h1>Dashboard</h1>
			<Link to="stats">Statistics</Link>
			<Link to="configure">Configure</Link>

			<Outlet />
			{/* <Routes>
				<Route path="stats" element={<p>Dashboard Statistics</p>} />
			</Routes> */}
		</div>
	);
}
