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
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/products" element={<Products />} />
				<Route
					path="/products/:productId"
					element={<ProductDetail />}
				/>
			</Routes>
		</div>
	);
}

export default App;
