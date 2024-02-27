/* eslint-disable react/prop-types */

function Pagination({
  dataLength,
  dataPerPage,
  currentPage,
  paginationOnClickHandler,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(dataLength / dataPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages
        ? pages.map((page, index) => {
            return (
              <button
                onClick={() => paginationOnClickHandler(page)}
                className={`pagination-btn ${
                  currentPage == page ? 'pagination-active' : ''
                }`}
                key={index}>
                {page}
              </button>
            );
          })
        : ''}
    </div>
  );
}

export default Pagination;
