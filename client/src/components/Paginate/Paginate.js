import React from "react";
import { StyledPaginate } from "./StyledPaginate";

export default function Paginate({ breedsPerPage, allBreeds, pagination }) {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allBreeds / breedsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <StyledPaginate>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li>
                <a onClick={() => pagination(number)}>{number}</a>
              </li>
            );
          })}
      </ul>
    </StyledPaginate>
  );
}
