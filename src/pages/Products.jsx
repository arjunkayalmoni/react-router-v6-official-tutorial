import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const URL = "https://fakestoreapi.com/products";

export default function Products() {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const resp = await axios.get(URL);
		setProducts(resp.data);
		console.log(resp.data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<div>
			<h1>Products</h1>

			<Container>
				<Row>
					{products.map((product) => (
						<Col key={product.id}>
							<Card style={{ width: "18rem" }}>
								<Card.Body>
									<Card.Title>{product.title}</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										${product.price}
									</Card.Subtitle>
									<Card.Text>{product.description}</Card.Text>
									<Card.Link
										href="#"
										style={{ textDecoration: "none" }}
									>
										{product.rating.rate} stars from{" "}
										{product.rating.count} ratings
									</Card.Link>
									<>
										<Button variant="outline-primary">
											<Link
												to={`/products/${product.id}`}
											>
												View
											</Link>
										</Button>
									</>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}
