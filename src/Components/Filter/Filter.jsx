function Filter({ sortPage, isSortSelected, setIsSortSelected, currentSort }) {
    const handleSortSelect = (event) => {
        sortPage(event.target.value);
        setIsSortSelected(true);
    };

    const handleResetClick = () => {
        sortPage("");
        setIsSortSelected(false);
    };

    const options = [
        { value: "", label: "Select an option" },
        { value: "sort=price&order=asc", label: "Price: Low to High" },
        { value: "sort=price&order=desc", label: "Price: High to Low" },
    ];

    return (
        <div className="filter">
            <h2>Sort By price</h2>
            <select onChange={handleSortSelect} value={currentSort}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
