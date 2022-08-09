import React, { useState } from "react";
import "./css/style.css";
const Pagination = ({ contentPerPage, totalContents, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalContents / contentPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <div className="row mt-4 mb-2">
          {pageNumbers.map((number) => (
            <div
              id={number}
              className="col-1 btn btn-light pr-5"
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Pagination;
