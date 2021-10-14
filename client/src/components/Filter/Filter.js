import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBreeds,
  getTemperaments,
  filterBreedsByTemperaments,
  filterCreated,
  orderBreeds,
} from "../../actions/index";
import { StyledFilter } from "./StyledFilter";

export default function Filter({ pagination }) {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperaments);

allTemperaments.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

    useEffect(() => {
      dispatch(getTemperaments());
    }, []);

  const [selectedOrder, setSelectedOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("name");

  const handleChange = (e) => {
    if (e.target.value === "name" || e.target.value === "weight") {
      setSelectedCategory(e.target.value);
    } else {
      setSelectedOrder(e.target.value); 
    }
  };

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderBreeds(selectedOrder, selectedCategory));
    pagination(1);
  };

  const handleFilterByTemperaments = (e) => {
    dispatch(filterBreedsByTemperaments(e.target.value));
    pagination(1);
  };

  const handleFilterCreated = (e) => {
    dispatch(filterCreated(e.target.value));
  };

  return (
    <StyledFilter>
      <h1>Sort By:</h1>
      <div>
        <select onChange={handleChange}>
          <option value="asc">Ascending</option>
          <option value="des">Descending</option>
        </select>
        <select onChange={handleChange}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <button
          onClick={(e) => {
            handleSort(e);
          }}
        >
            Sort
        </button>
        </div>

        <div className="filter-by">
          <h1>Filter By:</h1>
        <select
          onChange={(e) => {
            handleFilterByTemperaments(e);
          }}
        >
          <option value="All">Select Temperaments</option>
          {allTemperaments?.map((el) => {
            return <option value={el.name}>{el.name}</option>;
          })}
        </select>
        <select
          onChange={(e) => {
            handleFilterCreated(e);
          }}
        >
          <option value="All">All</option>
          <option value="Created">Created</option>
          <option value="Existent">Existent</option>
        </select>
        </div>
    </StyledFilter>
  );
}
