function FilterbyCategory({ filterbyCategory, selectedFilter, setSelectedFilter }) {

  const handleCategoryClick = (filter) => {
    filterbyCategory(filter);
    setSelectedFilter(filter);
  };

  const handleResetClick = () => {
    filterbyCategory(null);
    setSelectedFilter(null);
  };

  return (
    <div className="filterbyCategory">
      <h2>Filter By Category</h2>
      <button
        onClick={() => handleCategoryClick("&filter=men")}
        disabled={selectedFilter === "&filter=men"}
      >
        Men
      </button>
      <button
        onClick={() => handleCategoryClick("&filter=women")}
        disabled={selectedFilter === "&filter=women"}
      >
        Women
      </button>
      <button
        onClick={() => handleCategoryClick("&filter=kids")}
        disabled={selectedFilter === "&filter=kids"}
      >
        kids
      </button>
      <button
        onClick={() => handleCategoryClick("&filter=homedecor")}
        disabled={selectedFilter === "&filter=homedecor"}
      >
        Home Decor
      </button>
      <button onClick={handleResetClick} disabled={!selectedFilter}>
        Reset
      </button>
    </div>
  );
}

export default FilterbyCategory;
