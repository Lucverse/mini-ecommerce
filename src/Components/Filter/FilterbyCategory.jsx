function FilterbyCategory({filterbyCategory}){
    return (
        <div>
            <button onClick={()=>filterbyCategory(`&filter=men`)}>Men</button>
            <button onClick={()=>filterbyCategory(`&filter=women`)}>Women</button>
            <button onClick={()=>filterbyCategory(`&filter=kids`)}>kids</button>
            <button onClick={()=>filterbyCategory(`&filter=homedecor`)}>Home Decor</button>
            <button onClick={()=>filterbyCategory(null)}>Reset</button>
        </div>
    )
}
export default FilterbyCategory;