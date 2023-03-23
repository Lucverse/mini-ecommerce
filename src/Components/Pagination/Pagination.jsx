function Pagination({ updatePage, page, totalPages}) {
    const prev = <button
        onClick={() => updatePage(page - 1)}
        disabled={page <= 1}
    >PREV</button>;
    const currentPage = <button disabled={true} >{page}</button>;
    const next = <button
        onClick={() => updatePage(page + 1)}
        disabled={page >= totalPages}
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
