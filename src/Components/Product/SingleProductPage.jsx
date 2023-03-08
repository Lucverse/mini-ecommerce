import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function SingleProductPage() {

    const { id } = useParams();
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
            .then((res) => res.json())
            .then((data => {
                setState(data.data);
            }))
    }, [id]);
    return (
        <div className="mainSingleProudctCard">
            <div className="SingleProductCard">
                <div className="product-image">
                    <img  src={state.image} height="300px" alt={state.title} />
                </div>
                <div>
                    <h1 data-testid="product-title">{state.title}</h1>
                    <p data-testid="product-price">Price : ₹ {state.price}</p>
                    <h3 data-testid="product-category">{state.category}</h3>
                    <p>Description</p>
                    <p>Alskjdfm lxckj wsoi2 msc skldj20sdfasdlfjasd fasldfa sdfjlas lasjkdflasmd alskdcjasldkcmn29oijfa asbcdasdcAlskjdfm
                        Alskjdfm lxckj wsoi2 msc skldj20sdfasdlfjasd fasldfa sdfjlas lasjkdflasmd alskdcjasldkcmn29oijfa asbcdasdcAlskjdfm
                        Alskjdfm lxckj wsoi2 msc skldj20sdfasdlfjasd fasldfa sdfjlas lasjkdflasmd alskdcjasldkcmn29oijfa asbcdasdcAlskjdfm
                    </p>
                    <p data-testid="product-category">{state.brand}</p>
                </div>
            </div>
            <button className="button-css">Add to Cart</button>
        </div>
    )
}
export default SingleProductPage;