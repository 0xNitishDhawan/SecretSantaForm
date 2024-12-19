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
        <Link to="/match">
          <Card cardText={"Matched Data"} />
        </Link>
      </div>
    </>
  );
};

export default Homepage;
