// src/pages/CheckoutPage.jsx

import React, { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
    const navigate = useNavigate();
    const { cart, setCart } = useContext(CartContext);

    const handleCheckout = () => {
        // Here you would typically handle the checkout process (e.g., payment processing)
        // For now, we'll just clear the cart and navigate to a thank you page
        setCart([]);
        navigate('/thank-you');
    };

    return (
        <div>
            <h1>Checkout</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div className="product-cart">
                    {cart.map(item => (
                        <div key={item._id}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <div className="price">{item.price} €</div>
                        </div>
                    ))}

                    <hr />

                    <div className="total">
                        Total: {cart.reduce((a, b) => a + b.price, 0)} €
                    </div>

                    <button onClick={handleCheckout}>Confirm and Pay</button>
                </div>
            )}
        </div>
    );
}

export default CheckoutPage;
