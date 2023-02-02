import Loader from "../Components/Loader";
import React, { useState, useContext, useEffect } from "react";
import ProductList from "../Components/ProductList";
import { AuthContext } from "../Context/AuthContext";
import Pagination from "../Components/Pagination";
function Dashboard() {
  const { authState, logoutUser } = useContext(AuthContext);
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  // const [order, setOrder] = useState('&order=asc&sort=price');
  // const [disL, setDisL] = useState(true);
  // const [disH, setDisH] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  useEffect(() => {
    setIsLoader(true);
    // fetch(`https://fakestoreapi.com/products?page=${page}&limit=10${order}`)
    fetch(`https://fakestoreapi.com/products?page=${page}&limit=10`)
      .then((res) => res.json())
      .then((data => {
        console.log(data);
        setState(data);
        setIsLoader(false);
      }))
  }, [page])
  var updatePage = (p) => {
    setPage(p);
  }
  // var sortL = () => {
  //   setOrder('&order=asc&sort=price');
  //   setDisH(false);
  //   setDisL(true);
  // }
  // var sortH = () => {
  //   setOrder('&order=desc&sort=price');
  //   setDisH(true);
  //   setDisL(false);
  // }
  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-around', padding:'5px'}}>
        <button data-testid="logout-btn" onClick={() => logoutUser()}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      {/* <div data-testid="sort-container">
        <button data-testid="low-to-high" onClick={sortL} disabled={disL}>Sort low to high</button>
        <button data-testid="high-to-low" onClick={sortH} disabled={disH}>Sort high to low</button>
      </div> */}
      {
        <Pagination updatePage={updatePage} page={page} />
      }
      <div style={{ display: "flex", justifyContent: "center" }}>
        {
          isLoader ?
          <Loader />:
            <ProductList
              products={state}
            />
        }
      </div>
    </div>
  );
}

export default Dashboard;
