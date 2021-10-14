import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getBreeds,
  getTemperaments,
} from "../../actions";
import Card from "../../components/Card/Card";
import Paginate from "../../components/Paginate/Paginate";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";

import { StyledHome } from "./StyledHome";


export default function Home() {
  const dispatch = useDispatch();
  const allBreeds = useSelector((state) => state.breeds);
  const allTemperaments = useSelector((state) => state.temperaments);
  

  const [currentPage, setCurrentPage] = useState(1);
  const [breedsPerPage, setBreedsPerPage] = useState(6);
  const indexOfLastBreed = currentPage * breedsPerPage;
  const indexOfFirstBreed = indexOfLastBreed - breedsPerPage;
  const currentBreeds = allBreeds.slice(indexOfFirstBreed, indexOfLastBreed);


  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getBreeds());
    dispatch(getTemperaments());
  }, []);

  return (
    <StyledHome>
      <div className="container">
        <div className="filter">
          <Filter pagination={pagination}></Filter>
        </div>
        <div className="cards-container">
          <div className="search">
            <SearchBar />
          </div>
          <div className="cards-group">

            {currentBreeds?.map((el) => {
              return (
                <Link to={`/dogs/${el.id}`} style={{ textDecoration: 'none'}}>
                  <div>
                    <Card
                      name={el.name}
                      height={el.height}
                      weight={el.weight}
                      life_span={el.life_span}
                      temperaments={el.temperaments}
                      image={el.image}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        <Paginate
          breedsPerPage={breedsPerPage}
          allBreeds={allBreeds.length}
          pagination={pagination}
        />
        </div>

        
      </div>
    </StyledHome>
  );
}

