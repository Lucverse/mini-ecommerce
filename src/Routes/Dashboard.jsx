import Loader from "../Components/Loader";
import React, { useState, useContext, useEffect } from "react";
import ProductList from "../Components/ProductList";
import { AuthContext } from "../Context/AuthContext";
import Pagination from "../Components/Pagination";
function Dashboard() {
  const { authState, logoutUser } = useContext(AuthContext);
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);
  useEffect(() => {
    setIsLoader(true);
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
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '5px' }}>
        <button data-testid="logout-btn" onClick={() => logoutUser()}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      {
        <Pagination updatePage={updatePage} page={page} />
      }
      <div style={{ display: "flex", justifyContent: "center" }}>
        {
          isLoader ?
            <Loader /> :
            <ProductList
              products={state}
            />
        }
      </div>
    </div>
  );
}

export default Dashboard;
