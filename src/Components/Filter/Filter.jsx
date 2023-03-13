function Filter({ sortPage, isSortSelected, setIsSortSelected, currentSort }) {
    const handleSortClick = (sortOption) => {
        sortPage(sortOption);
        setIsSortSelected(true);
    };

    const handleResetClick = () => {
        sortPage("");
        setIsSortSelected(false);
    };

    return (
        <div className="filter">
            <h2>Sort By price</h2>
            <button
                onClick={() => handleSortClick("sort=price&order=asc")}
                disabled={currentSort === "sort=price&order=asc"}
            >
                Ascending
            </button>
            <button
                onClick={() => handleSortClick("sort=price&order=desc")}
                disabled={currentSort === "sort=price&order=desc"}
            >
                Descending
            </button>
            <button onClick={handleResetClick} disabled={!isSortSelected}>
                Reset
            </button>
        </div>
    );
}

export default Filter;
