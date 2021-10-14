import React from "react";
import { Link } from "react-router-dom";
import { StyledLandingPage } from "./StyledLandingPage";

export default function LandingPage() {
  return (
    <StyledLandingPage>
      <div className="container">
        <Link to="/home">
        <h1>
        <a>
        ENTER
        </a>
        </h1>
        </Link>
      </div>
    </StyledLandingPage>
  );
}
