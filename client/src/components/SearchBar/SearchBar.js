import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyledSearchBar } from "./StyledSearchBar";

import { getBreedsByName } from "../../actions/index";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("");

const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getBreedsByName(name));
    setName("");
}

    return (
        <StyledSearchBar>
            <input 
                type="text"
                placeholder="Search..."
                onChange={(e) => {handleInputChange(e)}}
                value={name}
                 />
            <button
                type="submit"
                onClick={(e) => {handleSubmit(e)}}
                >
                Submit
            </button>
        </StyledSearchBar>
    )
}