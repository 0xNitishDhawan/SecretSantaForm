import React from "react";
import Form from "../Components/Form";
import Participants from "../Components/Participant";

const formPage = () => {
  return (
    <>
      <h2 className="">🎄 Secret Santa Registration 🎅</h2>
      <Form />
      <Participants />
    </>
  );
};

export default formPage;
