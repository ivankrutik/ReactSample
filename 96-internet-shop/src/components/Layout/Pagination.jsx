import React from 'react'

const Pagination = ({ cntPerPage, totalProducts, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalProducts / cntPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className="pagination">
        <li className="page-item ">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <a
              href="#"
              className="page-link"
              onClick={(e) => {
                e.preventDefault()
                paginate(num)
              }}
            >
              {num}
            </a>
          </li>
        ))}
        <li className="page-item ">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
