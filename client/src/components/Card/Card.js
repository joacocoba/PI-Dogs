import React from "react";
import { StyledCard } from "./StyledCard";
import setBgColor from "./Util";
import { useDispatch, useSelector } from "react-redux";

export default function Card({
  name,
  height,
  weight,
  life_span,
  temperaments,
  image,
}) {
  const allTemperaments = useSelector((state) => state.temperaments);
  return (
    <StyledCard>
      <div className="card-image">
        <img src={image} alt="img" />
      </div>
      <div className="card-information">
        <h3>{name}</h3>
        <div className="weight-container">
        {
          weight.map((el, i) =>{
            if(el === 0) {
              return i === 0 ? <p>Unknown -</p> : <p>Unknown</p>
              }
            else {
              return i === 0 ? <p>{el} - </p> : <p>{el} kg</p>
            } 
          })
          }
        </div>
        <div className="temperament-container">
        <h5>Temperaments</h5>
        <div className="temperaments">
          {
            temperaments?.map((el) => {
            return <h6 className="temp" style={{backgroundColor: setBgColor(el.name, allTemperaments)}}>{el.name}</h6>;
          })}
        </div>
      </div>
      </div>

      
    </StyledCard>
  );
}
