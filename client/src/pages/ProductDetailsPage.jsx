import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart.context';
const API_URL = "http://localhost:5005";

function ProductDetailsPage() {

    const { addToCart } = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(true);
    const { productId } = useParams()

    const getProductInfo = () => {
        // Get the token from the localStorage
        const storedToken = localStorage.getItem("authToken");

        // Send the token through the request "Authorization" Headers
        axios
            .get(
                `${API_URL}/products/${productId}`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => {
                setProduct(response.data)
                setIsLoading(false)
            })
            .catch((error) => console.log(error));
    };

    const [product, setProduct] = useState(null)

    const fakeImgURL = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg"

    useEffect(() => {
        getProductInfo()
    }, [])

    return (
        <div className='page'>

            <Link className='back' to={`/products`}>Back</Link>

            {isLoading ? <>

                Loading...

            </> : <>

                <div className='product-info'>

                    <img src={fakeImgURL} alt="" />

                    <h1>
                        {product.name}
                    </h1>

                    <p>
                        {product.description}
                    </p>

                    <button onClick={() => addToCart(product)}> Add To Cart </button>

                </div>

            </>}

        </div>
    )
}

export default ProductDetailsPage