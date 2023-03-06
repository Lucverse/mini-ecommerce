function Pagination({ updatePage, page }) {
    const prev = <button
        onClick={() => updatePage(page - 1)}
        disabled={page <= 1}
    >PREV</button>;
    const currentPage = <button >{page}</button>;
    const next = <button
        onClick={() => updatePage(page + 1)}
        disabled={page >= 4}
    >NEXT</button>;
    return (
        <div >
            {prev}
            {currentPage}
            {next}
        </div>
    );
}

export default Pagination;
