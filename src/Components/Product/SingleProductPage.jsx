import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
function SingleProductPage() {

    const { id } = useParams();
    console.log(id);
    const [state, setState] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    useEffect(() => {
        setIsLoader(true);
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
            .then((res) => res.json())
            .then((data => {
                setState(data.data);
                setIsLoader(false);
            }))
    }, [id]);
    return (
        <div>
            <div className="SingleProductCard">
                <img data-testid="product-image" src={state.image} height="250px" alt={state.title} />
                <b data-testid="product-title">{state.title}</b>
                <span data-testid="product-price">₹ {state.price}</span>
                <p data-testid="product-category">{state.category}</p>
                <p data-testid="product-category">{state.brand}</p>
                <button>Add to Cart</button>

            </div>

        </div>
    )
}
export default SingleProductPage;