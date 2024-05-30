import React, { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import { Link } from 'react-router-dom'

function CartPage() {

    const { cart, setCart } = useContext(CartContext)

    return (
        <div>

            <h1>Your Cart!</h1>

            {!cart ? <>
                You have nothing in your cart!
                <Link to={"/products"}>Add some products!</Link>
            </> : <div className='product-cart'>
                <h3>
                    {cart.name}
                </h3>
                <p>
                    {cart.description}
                </p>
                <div className='price'>
                    {cart.price} €
                </div>

                <button>Proceed to Checkout</button>
            </div>}


        </div>
    )
}

export default CartPage