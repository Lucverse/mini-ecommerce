function Filter({sortPage}){
    return (
        <div>
            <button onClick={()=>sortPage(`sort=price&order=asc`)}>Ascending</button>
            <button onClick={()=>sortPage(`sort=price&order=desc`)}>Descending</button>
            <button onClick={()=>sortPage(``)}>Reset</button>
        </div>
    )
}
export default Filter;