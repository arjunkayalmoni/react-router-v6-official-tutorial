import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import Invoice from "./routes/Invoice";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="expenses" element={<Expenses />} />
					<Route path="invoices" element={<Invoices />}>
						<Route
							index
							element={
								<main style={{ padding: "1rem" }}>
									<p>Select an invoice</p>
								</main>
							}
						/>
						<Route path=":invoiceId" element={<Invoice />} />
					</Route>
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
