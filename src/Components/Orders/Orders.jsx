import React, { useState, useEffect } from "react";
import NoItem from "../Cart/NoItem";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("orderedItems")) || [];
        setOrders(items);
    }, []);

    return (
        <div>
            {orders.length > 0 ? (
                <div className="ordersPage">
                    {orders.map((item) => (
                        <div
                            className="SingleProductCard"
                            style={{ color: "black", backgroundColor: "white" }}
                            key={item.id}
                        >
                            <div className="product-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div >
                                <h2>{item.title}</h2>
                                <p><span style={{ fontWeight: 'bold' }}>Category: </span>{item.category}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Price: </span> ₹ {item.price}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Brand: </span>{item.brand}</p>
                                <span>
                                    <span style={{ fontWeight: "bold" }}>Quantity: </span>
                                    {item.quantity}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <NoItem/>
            )}

        </div>
    );
};

export default Orders;
