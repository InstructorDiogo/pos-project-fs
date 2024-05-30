import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const API_URL = "http://localhost:5005";

function ProductsPage() {

    const getAllProducts = () => {
        // Get the token from the localStorage
        const storedToken = localStorage.getItem("authToken");

        // Send the token through the request "Authorization" Headers
        axios
            .get(
                `${API_URL}/products`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    };

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div>ProductsPage

            {products.map((product) => (
                <Link to={`/products/${product._id}`} key={product._id}> {product.name} </Link>
            ))}

        </div>
    )
}

export default ProductsPage