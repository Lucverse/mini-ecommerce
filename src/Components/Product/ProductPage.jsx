import React, { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import FilterbyCategory from "../Filter/FilterbyCategory";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import ProductList from "./ProductList";
function ProductPage() {
    const [state, setState] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoader, setIsLoader] = useState(false);
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [isSortSelected, setIsSortSelected] = useState(false);
    useEffect(() => {
        setIsLoader(true);
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&${sort}&${category}`)
            .then((res) => res.json())
            .then((data => {
                setTotalPages(data.totalPages);
                setState(data.data);
                setIsLoader(false);
            }))
    }, [page, sort, category, selectedFilter, isSortSelected]);
    var updatePage = (p) => {
        setPage(p);
    }
    var sortPage = (s) => {
        setSort(s);
    }
    var filterbyCategory = (f) => {
        setCategory(f);
    }
    return (
        <div className="productpage">
            <h1>Product Page</h1>
            <div>
                {
                    isLoader ?
                        <Loading /> :
                        <div>
                            <div className="FilterDiv">
                                <Filter
                                    sortPage={sortPage}
                                    isSortSelected={isSortSelected}
                                    setIsSortSelected={setIsSortSelected}
                                    currentSort={sort}
                                />
                                <FilterbyCategory
                                    filterbyCategory={filterbyCategory}
                                    selectedFilter={selectedFilter}
                                    setSelectedFilter={setSelectedFilter}
                                />
                            </div>
                            <ProductList
                                products={state}
                            />
                            <div className="paginationDiv">
                                {
                                    <Pagination updatePage={updatePage} page={page} totalPages={totalPages} />
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
export default ProductPage;