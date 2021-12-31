import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/ProductDetail";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Col, Container, Row } from "react-bootstrap";
import ProductDetail from "./pages/ProductDetail";

function App() {
	return (
		<div>
			<NavBar />
			<Container>
				<Row>
					<Col>
						<h1>React Router V6</h1>
					</Col>
				</Row>
			</Container>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/welcome" element={<Navigate to="/" />} />
				<Route path="/home" element={<Navigate replace to="/" />} />
				{/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
				<Route path="/dashboard/*" element={<Dashboard />}>
					<Route path="stats" element={<p>Dashboard Statistics</p>} />
					<Route
						path="configure"
						element={<p>Configure Dashboard</p>}
					/>
				</Route>
				<Route path="/products" element={<Products />} />
				<Route
					path="/products/:productId"
					element={<ProductDetail />}
				/>
				<Route path="*" element={<p>Error: 404 - Page Not Found!</p>} />
			</Routes>
		</div>
	);
}

export default App;
