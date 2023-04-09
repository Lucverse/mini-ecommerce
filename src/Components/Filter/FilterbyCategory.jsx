function FilterbyCategory({ filterbyCategory, selectedFilter, setSelectedFilter }) {

  const handleCategorySelect = (event) => {
    filterbyCategory(event.target.value);
    setSelectedFilter(event.target.value);
  };

  const handleResetClick = () => {
    filterbyCategory(null);
    setSelectedFilter(null);
  };

  const options = [
    { value: null, label: "Select a category" },
    { value: "&filter=men", label: "Men" },
    { value: "&filter=women", label: "Women" },
    { value: "&filter=kids", label: "Kids" },
    { value: "&filter=homedecor", label: "Home Decor" },
  ];

  return (
    <div className="filterbyCategory">
      <h2>Filter By Category</h2>
      <select onChange={handleCategorySelect} value={selectedFilter || ''}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterbyCategory;
