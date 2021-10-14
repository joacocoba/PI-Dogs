import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postBreed, getTemperaments } from "../../actions";
import { StyledCreateBreed } from "./StyledCreateBreed";

const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!input.heightMin) {
    errors.heightMin = "Height Min is required";
  } else if (!input.heightMax) {
    errors.heightMax = "Height Max is required";
  } else if (!input.weightMin) {
    errors.weightMin = "Weight Min is required";
  } else if (!input.weightMax) {
    errors.weightMax = "Weight Max is required";
  }
  
  return errors;
};

export default function CreateBreed() {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperaments = useSelector((state) => state.temperaments);

  const [input, setInput] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    if (
      !input.temperaments.includes(e.target.value) &&
      e.target.value !== "All"
    ) {
      setInput({
        ...input,
        temperaments: [...input.temperaments, e.target.value],
      });
    }
  };

  const handleRemoveBreed = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      temperaments: [
        ...input.temperaments.filter((temp) => temp !== e.target.value),
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBreed(input));
    setInput({
      name: "",
      heightMin: "",
      heightMax: "",
      weightMin: "",
      weightMax: "",
      life_span: "",
      temperaments: [],
    });
    setErrors({});
    history.push("/home");
  };

  return (
    <StyledCreateBreed>
      <div className="form">
        <form className="form-top" action="POST">
          <h1 className="form-title">Create Breed</h1>
          <div className="form-containers">
            <div>
              <input
                placeholder="Name:"
                type="text"
                value={input.name}
                name="name"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
              <input
                placeholder="Height Min:"
                type="number"
                value={input.heightMin}
                name="heightMin"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.heightMin && <p>{errors.heightMin}</p>}
            </div>
            <div>
              <input
                placeholder="Height Max:"
                type="number"
                value={input.heightMax}
                name="heightMax"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.heightMax && <p>{errors.heightMax}</p>}
            </div>
            <div>
              <input
                placeholder="Weight Min:"
                type="number"
                value={input.weightMin}
                name="weightMin"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.weightMin && <p>{errors.weightMin}</p>}
            </div>
            <div>
              <input
                placeholder="Weight Max:"
                type="number"
                value={input.weightMax}
                name="weightMax"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.weightMax && <p>{errors.weightMax}</p>}
            </div>
            <div>
              <input
                placeholder="Life Expectancy:"
                type="number"
                value={input.life_span}
                name="life_span"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <select
              onChange={(e) => {
                handleSelect(e);
              }}
            >
              <option value="All">Select Temperaments...</option>
              {temperaments.map((temp) => {
                return <option value={temp.name}>{temp.name}</option>;
              })}
            </select>
            <div className="temp-container">
              {input.temperaments.map((temp) => {
                return (
                  <p>
                    {temp}
                    <button onClick={(e) => handleRemoveBreed(e)} value={temp}>
                      X
                    </button>
                  </p>
                );
              })}
            </div>
            <button className="submit" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="image-container"></div>
    </StyledCreateBreed>
  );
}
