// src/context/auth.context.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";

const CartContext = React.createContext();

function CartProviderWrapper(props) {

    const navigate = useNavigate()

    const [cart, setCart] = useState(null);

    const addToCart = (product) => {
        console.log("my humps")
        console.log(product)
        setCart(product)
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
