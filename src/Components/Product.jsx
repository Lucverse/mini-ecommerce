import { useEffect } from "react";
import { useState } from "react";

function Product() {
    // const [products, setProducts] = useState([]);
    // const [page, setPage] = useState(1);
    // const getData = (url) => {
    //     return fetch(url).then((res) => res.json());
    // }
    // const fetchData = async () => {
    //     try {
    //         let data = await getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${page}`);
    //         console.log(data.data);
    //         setProducts(data.data);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     fetchData();
    // }, [page, fetchData]);

    // return (
    //     <div>
    //         <div className="productDiv">
    //             {
    //                 products.map((elem) => {
    //                     return (
    //                         <div>
    //                             <img src={elem.image} style={{ width: '150px', mixBlendMode: 'color-burn' }} alt={elem.title} />
    //                             <h3>{elem.title}</h3>
    //                             <p>{elem.category}</p>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //         <div className='Pagination_div'>
    //             <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
    //             <button disabled>{page}</button>
    //             <button disabled={page>=4} onClick={() => setPage(page + 1)}>Next</button>
    //         </div>
    //     </div>
    // )
}
export default Product;