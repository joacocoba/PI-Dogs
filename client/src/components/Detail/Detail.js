import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreedDetail, getTemperaments } from "../../actions/index";
import setBgColor from "../Card/Util";
import { StyledDetail } from "./StyledDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltV } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";

export default function Detail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreedDetail(props.match.params.id));
    dispatch(getTemperaments());
  }, [dispatch]);

  const breed = useSelector((state) => state.detail);
  const allTemperaments = useSelector((state) => state.temperaments);
  return (
    <StyledDetail>
      {breed.length > 0 ? (
        <div className="detail-container">
          <div className="image-container">
            <img src={breed[0].image} alt=""></img>
          </div>
          <div className="information-container">
            <h1>{breed[0].name}</h1>
            <div className="stats-container">
              <p>
                <FontAwesomeIcon icon={faArrowsAltV} size="2x" /> Height
              </p>
              <p>
              <FontAwesomeIcon icon={faBalanceScale } size="2x" />  Weight
              </p>
            </div>
            <div className="stats-values">
            {breed[0].height.map((el, i) => {
                  if (el === 0) {
                    if(i === 0){
                        return <p>Unknown -</p> 
                    } else {
                        return <p>Unknown</p>;
                    }
                  } else {
                      if(i === 0) return <p>{el} -</p>;
                    return <p>{el} cm </p>;
                  }
                })}
                <span className="separator"></span>
                {breed[0].weight.map((el, i) => {
                  if (el === 0) {
                    if(i === 0){
                        return <p>Unknown -</p> 
                    } else {
                        return <p>Unknown</p>;
                    }
                  } else {
                    if(i === 0) return <p>{el} -</p>;
                    return <p>{el} kg</p>;
                  }
                })}
            </div>

            <h3 className="life-expectancy">Life Expectancy: {breed[0].life_span ? breed[0].life_span : "Unknown" } </h3>

            <div className="temperament-container">
              <h5>Temperaments: </h5>
              <div className="temperaments">
                {breed[0].temperaments?.map((el) => {
                  return (
                    <h6
                      className="temp"
                      style={{
                        backgroundColor: setBgColor(el.name, allTemperaments),
                      }}
                    >
                      {el.name}
                    </h6>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </StyledDetail>
  );
}
