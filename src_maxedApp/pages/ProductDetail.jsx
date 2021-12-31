import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { URL } from "./Products";

export default function ProductDetail() {
	const params = useParams();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const resp = await axios.get(URL + `/${params.productId}`);
			setProduct(resp.data);
			console.log(resp.data);
		};
		fetchProducts();
	}, [params.productId]);

	return (
		<div>
			<h1>Product Detail</h1>
			<h4>ID: {params.productId}</h4>
			<Table responsive="sm">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Category</th>
						<th>Price</th>
						<th>Rating</th>
						<th>Total Reviews</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{product.id}</td>
						<td>{product.title}</td>
						<td>{product.category}</td>
						<td>{product.price}</td>
						<td>{product?.rating?.rate}</td>
						<td>{product?.rating?.count}</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}
