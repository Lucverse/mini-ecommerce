import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {
    const { id } = useParams();
    const [state, setState] = useState({});

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItemIndex = cartItems.findIndex((item) => item.id === state.id);
        if (existingItemIndex !== -1) {
            alert("This item is already in your cart!", "alert-warning");
        } else {
            const itemToAdd = { ...state, quantity: 1 };
            cartItems.push(itemToAdd);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            alert("Item added to your cart!", "alert-success");
        }
    };

    function alert(message, className) {
        const div = document.createElement("div");
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        document.body.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 1000);
    }

    useEffect(() => {
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
            .then((res) => res.json())
            .then((data => {
                setState(data.data);
            }))
    }, [id]);

    return (
        <div className="mainSingleProudctCard">
            <div className="" id="test">
                <div >
                    <img src={state.image} height="300px" alt={state.title} />
                </div>
                <div>
                    <h1>{state.title}</h1>
                    <p><span style={{ fontWeight: 'bold' }}>Price: </span> ₹ {state.price}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Category: </span>{state.category}</p>
                    <p><span style={{ fontWeight: 'bold' }}>Brand: </span>{state.brand}</p>
                    <h3 style={{ textDecoration: 'underline' }}>Description</h3>
                    <p style={{ fontFamily: 'italic', fontStyle: 'oblique' }}>
                        Description
                    </p>
                </div>
            </div>
            <button className="button-css" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default SingleProductPage;
