// src/context/cart.context.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5005";

const CartContext = React.createContext();

function CartProviderWrapper(props) {

    const navigate = useNavigate()

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(cart => [...cart, product])
        navigate(`/cart`)
    }

    return (
        <CartContext.Provider
            value={{
                cart, setCart, addToCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export { CartProviderWrapper, CartContext };
