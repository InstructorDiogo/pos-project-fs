// src/pages/CartPage.jsx

import React, { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function CartPage() {

    const navigate = useNavigate()
    const { cart, setCart } = useContext(CartContext)

    return (
        <div>

            <h1>Your Cart!</h1>

            {cart.length == 0 ? <>
                You have nothing in your cart!
                <Link to={"/products"}>Add some products!</Link>
            </> : <div className='product-cart'>

                {cart.map(item => (
                    <div key={item._id}>
                        <h3>
                            {item.name}
                        </h3>
                        <p>
                            {item.description}
                        </p>
                        <div className='price'>
                            {item.price} €
                        </div>
                    </div>
                ))}

                <hr />

                <div className='total'>

                    Total: {cart.reduce((a, b) => a + b.price, 0)} €

                </div>

                <button onClick={() => navigate(`/checkout`)}>Proceed to Checkout</button>
            </div>}


        </div>
    )
}

export default CartPage