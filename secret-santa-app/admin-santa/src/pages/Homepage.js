import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="Card-div">
        <Link to="/participants">
          <Card cardText={"Registered Participants"} />
        </Link>
        <Card cardText={"Matched Data"} />
      </div>
    </>
  );
};

export default Homepage;
