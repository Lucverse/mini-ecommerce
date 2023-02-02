function Pagination({ updatePage, page }) {
  const prev = <button data-testid="prev-page"
    onClick={() => updatePage(page - 1)}
    disabled={page <= 1}
  >PREV</button>;
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = <button data-testid="next-page"
    onClick={() => updatePage(page + 1)}
    disabled={page>=4}
  >NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">4</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
